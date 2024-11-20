import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Repository } from 'typeorm';
import { ConsumeMessage } from 'amqplib';

import rabbitmqConfig from '../../config/rabbitmq.config';

import { Account } from '../entity/account.entity';
import {
  AccountMovement,
  AccountMovementType,
} from '../entity/account-movement.entity';

@Injectable()
export class AccountMovementConsumer {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    @InjectRepository(AccountMovement)
    private readonly accountMovementRepository: Repository<AccountMovement>,
  ) {}

  @RabbitSubscribe({
    queue: rabbitmqConfig().queue,
  })
  public async handleQueue(movement: AccountMovement, amqpMsg: ConsumeMessage) {
    try {
      // Process message
      const account = await this.accountRepository.findOneBy({
        id: movement.account.id,
      });
      if (!account) {
        throw new Error('Account not found');
      }

      if (account.locked) {
        throw new Error('Account is processing other movement');
      }

      account.locked = true;
      await this.accountRepository.save(account);

      const newBalance =
        movement.type === AccountMovementType.DEPOSIT
          ? account.balance + movement.amount
          : account.balance - movement.amount;

      if (newBalance < 0) {
        throw new Error('Insufficient balance');
      }

      movement.localMovement = account.city.id === movement.city.id;

      await this.accountMovementRepository.save(movement);

      account.locked = false;
      account.balance = newBalance;

      await this.accountRepository.save(account);

      amqpMsg.ack();
    } catch (error) {
      console.log(error);
      amqpMsg.nack();
    }
  }
}
