import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  path: string;

  @Column('uuid')
  orphanage_id: string;

  @ManyToOne(() => Orphanage)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;

  @Expose({ name: 'url' })
  getImagesUrl(): string {
    return `http://localhost:3333/uploads/${this.path}`;
  }
}
