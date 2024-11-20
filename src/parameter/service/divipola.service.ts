import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from 'src/core/base.service';
import { Divipola } from '../entity/divipola.entity';

export class DivipolaService extends BaseService<Divipola> {
  constructor(
    @InjectRepository(Divipola)
    private readonly divipolaRepository: Repository<Divipola>,
  ) {
    super(divipolaRepository);
  }
}
