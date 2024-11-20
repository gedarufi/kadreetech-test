import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { AccountMovement } from '../entity/account-movement.entity';

export class AccountMovementService extends BaseService<AccountMovement> {
  constructor(
    @InjectRepository(AccountMovement)
    private readonly accountMovementRepository: Repository<AccountMovement>,
  ) {
    super(accountMovementRepository);
  }
}
