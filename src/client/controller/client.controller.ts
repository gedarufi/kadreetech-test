import { Controller } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';
import { DeleteController } from 'src/core/delete.decorator';
import { InsertController } from 'src/core/insert.decorator';
import { UpdateController } from 'src/core/update.decorator';

import { Client } from '../entity/client.entity';
import { ClientService } from '../service/client.service';

@Controller('client')
@GetAllController<Client>({ service: ClientService })
@GetOneController<Client>({ service: ClientService })
@InsertController<Client>({ service: ClientService })
@UpdateController<Client>({ service: ClientService })
@DeleteController<Client>({ service: ClientService })
export class ClientController {}
