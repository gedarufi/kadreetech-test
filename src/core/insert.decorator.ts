import { Inject, Post, Req, Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Request } from 'express';

import { BaseService } from './base.service';

type InsertControllerParams<T extends ObjectLiteral> = {
  path?: string;
  service: Type<BaseService<T>>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  guard?: Function | Function[];
};

export function InsertController<T extends ObjectLiteral>(
  params: InsertControllerParams<T>,
): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function <TFunction extends Function>(target: TFunction): TFunction {
    Inject(params.service)(target.prototype, 'entityService');

    target.prototype.insert = function (req: Request) {
      const { body } = req;

      return this.entityService.save(body);
    };

    if (params.guard) {
      const guards = Array.isArray(params.guard)
        ? params.guard
        : [params.guard];

      guards.forEach((guard) => {
        guard(
          target.prototype,
          'insert',
          Object.getOwnPropertyDescriptor(target.prototype, 'insert'),
        );
      });
    }

    Post(params.path ?? '')(
      target.prototype,
      'insert',
      Object.getOwnPropertyDescriptor(target.prototype, 'insert'),
    );

    Req()(target.prototype, 'insert', 0);

    return target;
  };
}
