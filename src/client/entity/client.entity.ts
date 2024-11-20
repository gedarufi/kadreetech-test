import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { ClientType } from '../../parameter/entity/client-type.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  phoneNumber: string;

  @Column({ length: 100 })
  email: string;

  @ManyToOne(() => ClientType)
  clientType: ClientType;

  @Column({ length: 100 })
  document: string;

  @Column({ default: true })
  enable: boolean;
}
