import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountType } from './entity/account-type.entity';
import { Divipola } from './entity/divipola.entity';
import { ClientType } from './entity/client-type.entity';

import { AccountTypeService } from './service/account-type.service';
import { ClientTypeService } from './service/client-type.service';
import { DivipolaService } from './service/divipola.service';

import { DivipolaController } from './controller/divipola.controller';
import { AccountTypeController } from './controller/account-type.controller';
import { ClientTypeController } from './controller/client-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountType, ClientType, Divipola])],
  controllers: [
    AccountTypeController,
    ClientTypeController,
    DivipolaController,
  ],
  providers: [AccountTypeService, ClientTypeService, DivipolaService],
  exports: [AccountTypeService, ClientTypeService, DivipolaService],
})
export class ParameterModule {}
