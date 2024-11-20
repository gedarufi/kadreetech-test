import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { ClientType } from '../entity/client-type.entity';

export class ClientTypeService extends BaseService<ClientType> {
  constructor(
    @InjectRepository(ClientType)
    private readonly clientTypeRepository: Repository<ClientType>,
  ) {
    super(clientTypeRepository);

    this.relations = ['accountTypes'];
  }
}
