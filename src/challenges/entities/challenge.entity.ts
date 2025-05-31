import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { SkillCategory } from '../../common/enums/skill-category.enum';
import { ChallengeStatus } from '../../common/enums/challenge-status.enum';
import { User } from '../../users/entities/user.entity';
import { Submission } from '../../submissions/entities/submission.entity';

export enum ChallengeDifficulty {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

@Entity('challenges')
export class Challenge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: SkillCategory })
  category: SkillCategory;

  @Column({ type: 'enum', enum: ChallengeDifficulty })
  difficulty: ChallengeDifficulty;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  reward: number;

  @Column({ type: 'timestamp', nullable: true })
  deadline: Date;

  @Column({ type: 'enum', enum: ChallengeStatus, default: ChallengeStatus.DRAFT })
  status: ChallengeStatus;

  @Column({ type: 'jsonb', nullable: true })
  requirements: any;

  @Column()
  creatorId: string;

  @ManyToOne(() => User, user => user.createdChallenges)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @OneToMany(() => Submission, submission => submission.challenge)
  submissions: Submission[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}