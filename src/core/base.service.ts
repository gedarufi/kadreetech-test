import {
  DeleteResult,
  FindManyOptions,
  FindOptionsOrder,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export type PaginatorParam = {
  page: number;
  pageSize: number;
};

export type SortParam<T extends ObjectLiteral> = {
  field: keyof T;
  order: 'ASC' | 'DESC';
};

export class BaseService<T extends ObjectLiteral> {
  protected relations: string[];

  constructor(private readonly repository: Repository<T>) {
    this.relations = [];
  }

  async getAll(paginator?: PaginatorParam, sort?: SortParam<T>): Promise<T[]> {
    const findParams: FindManyOptions<T> = { relations: this.relations };

    if (paginator) {
      findParams.take = paginator.pageSize;
      findParams.skip = (paginator.page - 1) * paginator.pageSize;
    }

    if (sort) {
      findParams.order = { [sort.field]: sort.order } as FindOptionsOrder<T>;
    }

    return this.repository.find(findParams);
  }

  async getOne(filter: any): Promise<T> {
    return this.repository.findOne({
      where: filter,
      relations: this.relations,
    });
  }

  async save(model: T): Promise<T> {
    return this.repository.save(model);
  }

  async update(filter: any, model: T): Promise<T> {
    await this.repository.update({ where: filter }, model);

    return this.getOne(filter);
  }

  async delete(filter: any): Promise<DeleteResult> {
    return this.repository.delete({ where: filter });
  }
}
