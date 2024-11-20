import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { Client } from '../entity/client.entity';

export class ClientService extends BaseService<Client> {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {
    super(clientRepository);
  }
}
