import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { AccountMovement } from '../entity/account-movement.entity';
import { RabbitMQService } from 'src/shared/services/rabbitmq.service';

export class AccountMovementService extends BaseService<AccountMovement> {
  constructor(
    @InjectRepository(AccountMovement)
    private readonly accountMovementRepository: Repository<AccountMovement>,
    private readonly rabbitMQService: RabbitMQService,
  ) {
    super(accountMovementRepository);
  }

  async create(body: AccountMovement) {
    // Push to RabbitMQ queue
    await this.rabbitMQService.publishMessage('account_movements', { ...body });

    return true;
  }
}
