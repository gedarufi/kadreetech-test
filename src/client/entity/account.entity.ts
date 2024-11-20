import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Divipola } from '../../parameter/entity/divipola.entity';

import { Client } from './client.entity';
import { AccountType } from '../../parameter/entity/account-type.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client)
  owner: Client;

  @ManyToOne(() => AccountType)
  accountType: AccountType;

  @ManyToOne(() => Divipola)
  city: Divipola;

  @Column({
    default: 0,
    type: 'decimal',
    precision: 15, // Total number of digits
    scale: 2, // Number of decimal places
  })
  balance: number;

  @Column({ type: 'boolean', default: false })
  locked: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
