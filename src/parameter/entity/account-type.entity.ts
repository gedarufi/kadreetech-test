import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ClientType } from './client-type.entity';

@Entity('account_types')
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ default: true })
  enable: boolean;

  @ManyToMany(() => ClientType, (clientType) => clientType.accountTypes)
  clientTypes: ClientType[];
}
