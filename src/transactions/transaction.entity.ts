import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Transaction {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal')
  amount: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @Column({ type: 'date' })
  date: Date;

  // 🔹 Relación con User
  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

}
