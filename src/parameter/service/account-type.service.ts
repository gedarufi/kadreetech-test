import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { AccountType } from '../entity/account-type.entity';

export class AccountTypeService extends BaseService<AccountType> {
  constructor(
    @InjectRepository(AccountType)
    private readonly accountTypeRepository: Repository<AccountType>,
  ) {
    super(accountTypeRepository);
  }
}
