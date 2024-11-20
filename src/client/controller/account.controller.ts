import { Controller, Get, Param } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';
import { DeleteController } from 'src/core/delete.decorator';
import { InsertController } from 'src/core/insert.decorator';
import { UpdateController } from 'src/core/update.decorator';

import { Account } from '../entity/account.entity';
import { AccountService } from '../service/account.service';

@Controller('account')
@GetAllController<Account>({ service: AccountService })
@GetOneController<Account>({ service: AccountService })
@InsertController<Account>({ service: AccountService })
@UpdateController<Account>({ service: AccountService })
@DeleteController<Account>({ service: AccountService })
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('balance/:year/:month')
  public async getAmountTransactions(
    @Param('year') year: number,
    @Param('month') month: number,
  ) {
    return this.accountService.getCountTransactions(year, month);
  }

  @Get('withdraw-foreign')
  public async withdrawForeign() {
    const minAmount = 1000000;

    return this.accountService.withdrawForeign(minAmount);
  }
}
