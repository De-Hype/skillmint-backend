import { SubmissionStatus } from '../../common/enums/submission-status.enum';
import { User } from '../../users/entities/user.entity';
import { Challenge } from '../../challenges/entities/challenge.entity';
export declare class Submission {
    id: string;
    challengeId: string;
    userId: string;
    submissionUrl: string;
    description: string;
    status: SubmissionStatus;
    feedback: string;
    score: number;
    challenge: Challenge;
    user: User;
    submittedAt: Date;
    reviewedAt: Date;
}
