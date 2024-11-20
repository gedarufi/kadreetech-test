import { Inject, Put, Req, Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Request } from 'express';

import { BaseService } from './base.service';

type UpdateControllerParams<T extends ObjectLiteral> = {
  path?: string;
  service: Type<BaseService<T>>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  guard?: Function | Function[];
};

export function UpdateController<T extends ObjectLiteral>(
  params: UpdateControllerParams<T>,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function <TFunction extends Function>(target: TFunction): TFunction {
    Inject(params.service)(target.prototype, 'entityService');

    target.prototype.update = function (req: Request) {
      const findParams = req.params;
      const { body } = req;

      return this.entityService.update(findParams, body);
    };

    if (params.guard) {
      const guards = Array.isArray(params.guard)
        ? params.guard
        : [params.guard];

      guards.forEach((guard) => {
        guard(
          target.prototype,
          'update',
          Object.getOwnPropertyDescriptor(target.prototype, 'update'),
        );
      });
    }

    Put(params.path ?? ':id')(
      target.prototype,
      'update',
      Object.getOwnPropertyDescriptor(target.prototype, 'update'),
    );

    Req()(target.prototype, 'update', 0);

    return target;
  };
}
