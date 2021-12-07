import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';

const { CREATE } = CrudValidationGroups;

@Entity('blogs')
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  title: string;

  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  image: string;

  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  content: string;

  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  short_content: string;

  @Column({ type: 'date', default: Date.now })
  created_date: Date;

  @Column({ type: 'date', default: Date.now })
  updated_date: Date;
}
