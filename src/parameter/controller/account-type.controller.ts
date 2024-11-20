import { Controller } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';
import { DeleteController } from 'src/core/delete.decorator';
import { InsertController } from 'src/core/insert.decorator';
import { UpdateController } from 'src/core/update.decorator';

import { AccountType } from '../entity/account-type.entity';
import { AccountTypeService } from '../service/account-type.service';

@Controller('account-type')
@GetAllController<AccountType>({ service: AccountTypeService })
@GetOneController<AccountType>({ service: AccountTypeService })
@InsertController<AccountType>({ service: AccountTypeService })
@UpdateController<AccountType>({ service: AccountTypeService })
@DeleteController<AccountType>({ service: AccountTypeService })
export class AccountTypeController {}
