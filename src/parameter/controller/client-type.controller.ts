import { Controller } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';
import { DeleteController } from 'src/core/delete.decorator';
import { InsertController } from 'src/core/insert.decorator';
import { UpdateController } from 'src/core/update.decorator';

import { ClientType } from '../entity/client-type.entity';
import { ClientTypeService } from '../service/client-type.service';

@Controller('client-type')
@GetAllController<ClientType>({ service: ClientTypeService })
@GetOneController<ClientType>({ service: ClientTypeService })
@InsertController<ClientType>({ service: ClientTypeService })
@UpdateController<ClientType>({ service: ClientTypeService })
@DeleteController<ClientType>({ service: ClientTypeService })
export class ClientTypeController {}
