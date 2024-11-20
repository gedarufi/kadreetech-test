import { Controller } from '@nestjs/common';

import { GetAllController } from 'src/core/get-all.decorator';
import { GetOneController } from 'src/core/get-one.decorator';

import { Divipola } from '../entity/divipola.entity';
import { DivipolaService } from '../service/divipola.service';

@Controller('divipola')
@GetAllController<Divipola>({ service: DivipolaService })
@GetOneController<Divipola>({ service: DivipolaService })
export class DivipolaController {}
