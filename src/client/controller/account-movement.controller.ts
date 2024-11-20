import { Controller } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';
import { DeleteController } from 'src/core/delete.decorator';
import { InsertController } from 'src/core/insert.decorator';
import { UpdateController } from 'src/core/update.decorator';

import { AccountMovement } from '../entity/account-movement.entity';
import { AccountMovementService } from '../service/account-movement.service';

@Controller('account-movement')
@GetAllController<AccountMovement>({ service: AccountMovementService })
@GetOneController<AccountMovement>({ service: AccountMovementService })
@InsertController<AccountMovement>({ service: AccountMovementService })
@UpdateController<AccountMovement>({ service: AccountMovementService })
@DeleteController<AccountMovement>({ service: AccountMovementService })
export class AccountMovementController {}
