import { Body, Controller, Post } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';

import { AccountMovement } from '../entity/account-movement.entity';
import { AccountMovementService } from '../service/account-movement.service';

@Controller('account-movement')
@GetAllController<AccountMovement>({ service: AccountMovementService })
@GetOneController<AccountMovement>({ service: AccountMovementService })
export class AccountMovementController {
  constructor(private accountMovementService: AccountMovementService) {}

  @Post()
  async create(@Body() body: AccountMovement) {
    return this.accountMovementService.create(body);
  }
}
