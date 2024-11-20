import { Delete, Inject, Req, Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Request } from 'express';

import { BaseService } from './base.service';

type DeleteControllerParams<T extends ObjectLiteral> = {
  path?: string;
  service: Type<BaseService<T>>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  guard?: Function | Function[];
};

export function DeleteController<T extends ObjectLiteral>(
  params: DeleteControllerParams<T>,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function <TFunction extends Function>(target: TFunction): TFunction {
    Inject(params.service)(target.prototype, 'entityService');

    target.prototype.delete = function (req: Request) {
      const findParams = req.params;

      return this.entityService.delete(findParams);
    };

    if (params.guard) {
      const guards = Array.isArray(params.guard)
        ? params.guard
        : [params.guard];

      guards.forEach((guard) => {
        guard(
          target.prototype,
          'delete',
          Object.getOwnPropertyDescriptor(target.prototype, 'delete'),
        );
      });
    }

    Delete(params.path ?? ':id')(
      target.prototype,
      'delete',
      Object.getOwnPropertyDescriptor(target.prototype, 'delete'),
    );

    Req()(target.prototype, 'delete', 0);

    return target;
  };
}
