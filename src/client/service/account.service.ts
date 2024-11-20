import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThan, Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { Account } from '../entity/account.entity';
import {
  AccountMovement,
  AccountMovementType,
} from '../entity/account-movement.entity';

export class AccountService extends BaseService<Account> {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    @InjectRepository(AccountMovement)
    private readonly accountMovementRepository: Repository<AccountMovement>,
  ) {
    super(accountRepository);
  }

  async getCountTransactions(year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return this.accountMovementRepository
      .createQueryBuilder('accountMovement')
      .leftJoinAndSelect('accountMovement.account', 'account')
      .leftJoinAndSelect('account.owner', 'client')
      .select([
        'client.id',
        'client.firstName',
        'client.lastName',
        'client.document',
        'COUNT(accountMovement.id) as transactionCount',
      ])
      .where({
        createdAt: Between(startDate, endDate),
      })
      .groupBy('client.id')
      .addGroupBy('client.firstName')
      .addGroupBy('client.lastName')
      .addGroupBy('client.document')
      .orderBy('transactionCount', 'DESC')
      .getRawMany();
  }

  withdrawForeign(minAmount: number) {
    return this.accountMovementRepository
      .createQueryBuilder('accountMovement')
      .leftJoinAndSelect('accountMovement.account', 'account')
      .leftJoinAndSelect('account.owner', 'client')
      .select([
        'client.id',
        'client.firstName',
        'client.lastName',
        'client.document',
        'SUM(accountMovement.amount) as totalAmount',
      ])
      .where({
        localMovement: false,
        type: AccountMovementType.WITHDRAWAL,
        totalAmount: MoreThan(minAmount),
      })
      .groupBy('client.id')
      .addGroupBy('client.firstName')
      .addGroupBy('client.lastName')
      .addGroupBy('client.document')
      .orderBy('totalAmount', 'DESC')
      .getRawMany();
  }
}
