import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { Account } from './account.entity';
import { Divipola } from '../../parameter/entity/divipola.entity';

export enum AccountMovementType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
}

@Entity('account_movements')
export class AccountMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account)
  account: Account;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: AccountMovementType })
  type: AccountMovementType;

  @ManyToOne(() => Divipola)
  city: Divipola;

  @Column({ type: 'boolean' })
  localMovement: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
