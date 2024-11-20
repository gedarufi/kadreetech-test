import { Get, Inject, Req, Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Request } from 'express';

import { BaseService, PaginatorParam, SortParam } from './base.service';

type GetAllControllerParams<T extends ObjectLiteral> = {
  path?: string;
  service: Type<BaseService<T>>;
  defaultSortField?: keyof T;
  paginatorEnabled?: boolean;
  sortEnabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  guard?: Function | Function[];
};

export function GetAllController<T extends ObjectLiteral>(
  params: GetAllControllerParams<T>,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function <TFunction extends Function>(target: TFunction): TFunction {
    Inject(params.service)(target.prototype, 'entityService');

    target.prototype.getAll = function (req: Request) {
      const { page, pageSize, sortField, sortOrder } = req.query;
      const defaultSortField = params.defaultSortField ?? 'id';
      const paginator: PaginatorParam = {
        page: Number(page ?? 1),
        pageSize: Number(pageSize ?? 10),
      };
      const sort: SortParam<T> = {
        field: (sortField ?? defaultSortField) as keyof T,
        order: (sortOrder ?? 'ASC') as 'ASC' | 'DESC',
      };

      return this.entityService.getAll(
        params.paginatorEnabled ? paginator : undefined,
        params.sortEnabled ? sort : undefined,
      );
    };

    if (params.guard) {
      const guards = Array.isArray(params.guard)
        ? params.guard
        : [params.guard];

      guards.forEach((guard) => {
        guard(
          target.prototype,
          'getAll',
          Object.getOwnPropertyDescriptor(target.prototype, 'getAll'),
        );
      });
    }

    Get(params.path ?? '')(
      target.prototype,
      'getAll',
      Object.getOwnPropertyDescriptor(target.prototype, 'getAll'),
    );

    Req()(target.prototype, 'getAll', 0);

    return target;
  };
}
