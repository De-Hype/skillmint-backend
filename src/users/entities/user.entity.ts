import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { SkillCategory } from '../../common/enums/skill-category.enum';
import { Challenge } from '../../challenges/entities/challenge.entity';
import { Submission } from '../../submissions/entities/submission.entity';
import { Badge } from '../../badges/entities/badge.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  walletAddress: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'enum', enum: SkillCategory, array: true, default: [] })
  skillCategories: SkillCategory[];

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalEarnings: number;

  @Column({ type: 'integer', default: 0 })
  reputation: number;

  @OneToMany(() => Challenge, challenge => challenge.creator)
  createdChallenges: Challenge[];

  @OneToMany(() => Submission, submission => submission.user)
  submissions: Submission[];

  @OneToMany(() => Badge, badge => badge.user)
  badges: Badge[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}