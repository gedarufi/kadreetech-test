import { DeleteResult, ObjectLiteral } from 'typeorm';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BaseService } from './base.service';

export class BaseController<T extends ObjectLiteral> {
  constructor(protected readonly entityService: BaseService<T>) {}

  // @Get()
  // getAll(): Promise<T[]> {
  //   return this.entityService.getAll();
  // }

  // @Get(':id')
  // getOne(@Param() id: number | string): Promise<T> {
  //   return this.entityService.getOne(id);
  // }

  // @Post()
  // save(@Body() model: T): Promise<T> {
  //   return this.entityService.save(model);
  // }

  // @Put(':id')
  // update(@Param() id: number | string, @Body() model: T): Promise<T> {
  //   return this.entityService.update(id, model);
  // }

  // @Delete(':id')
  // delete(@Param() id: number | string): Promise<DeleteResult> {
  //   return this.entityService.delete(id);
  // }
}
