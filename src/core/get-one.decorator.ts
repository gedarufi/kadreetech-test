import { Get, Inject, Req, Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Request } from 'express';

import { BaseService } from './base.service';

type GetOneControllerParams<T extends ObjectLiteral> = {
  path?: string;
  service: Type<BaseService<T>>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  guard?: Function | Function[];
};

export function GetOneController<T extends ObjectLiteral>(
  params: GetOneControllerParams<T>,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function <TFunction extends Function>(target: TFunction): TFunction {
    Inject(params.service)(target.prototype, 'entityService');

    target.prototype.getOne = function (req: Request) {
      const findParams = req.params;

      return this.entityService.getOne(findParams);
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

    Get(params.path ?? ':id')(
      target.prototype,
      'getOne',
      Object.getOwnPropertyDescriptor(target.prototype, 'getOne'),
    );

    Req()(target.prototype, 'getOne', 0);

    return target;
  };
}
