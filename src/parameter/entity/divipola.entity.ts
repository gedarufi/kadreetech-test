import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('divipola')
@Index(['departmentCode', 'municipalityCode'], { unique: true })
export class Divipola {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2, name: 'department_code' })
  departmentCode: string;

  @Column({ length: 5, name: 'municipality_code' })
  municipalityCode: string;

  @Column({ length: 100, name: 'department_name' })
  departmentName: string;

  @Column({ length: 100, name: 'municipality_name' })
  municipalityName: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  // Helper method to get full code (department + municipality + center)
  getFullCode(): string {
    return `${this.departmentCode}${this.municipalityCode}`;
  }

  // Helper method to get full name
  getFullName(): string {
    return `${this.departmentName} - ${this.municipalityName}`;
  }
}
