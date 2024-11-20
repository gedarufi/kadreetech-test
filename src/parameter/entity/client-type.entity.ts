import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AccountType } from './account-type.entity';

@Entity('client_types')
export class ClientType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ default: true })
  enable: boolean;

  @ManyToMany(() => AccountType)
  @JoinTable({
    name: 'client_type_account_types', // name of the junction table
    joinColumn: {
      name: 'client_type_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'account_type_id',
      referencedColumnName: 'id',
    },
  })
  accountTypes: AccountType[];
}
