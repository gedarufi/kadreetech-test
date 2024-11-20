import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParameterModule } from 'src/parameter/parameter.module';

import { AccountMovement } from './entity/account-movement.entity';
import { Account } from './entity/account.entity';
import { Client } from './entity/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Account, AccountMovement]),
    ParameterModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ClientModule {}
