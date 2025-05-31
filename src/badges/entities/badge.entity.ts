import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Challenge } from '../../challenges/entities/challenge.entity';

@Entity('badges')
export class Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  challengeId: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  imageUrl: string;

  @Column({ nullable: true })
  nftTokenId: string;

  @Column({ nullable: true })
  transactionHash: string;

  @ManyToOne(() => User, user => user.badges)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Challenge)
  @JoinColumn({ name: 'challengeId' })
  challenge: Challenge;

  @Column({ type: 'timestamp', nullable: true })
  mintedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}