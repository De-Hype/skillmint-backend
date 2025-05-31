import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SubmissionStatus } from '../../common/enums/submission-status.enum';
import { User } from '../../users/entities/user.entity';
import { Challenge } from '../../challenges/entities/challenge.entity';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  challengeId: string;

  @Column()
  userId: string;

  @Column()
  submissionUrl: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: SubmissionStatus, default: SubmissionStatus.PENDING })
  status: SubmissionStatus;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @Column({ type: 'integer', nullable: true })
  score: number;

  @ManyToOne(() => Challenge, challenge => challenge.submissions)
  @JoinColumn({ name: 'challengeId' })
  challenge: Challenge;

  @ManyToOne(() => User, user => user.submissions)
  @JoinColumn({ name: 'userId' })
  user: User;

  @CreateDateColumn()
  submittedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  reviewedAt: Date;
}