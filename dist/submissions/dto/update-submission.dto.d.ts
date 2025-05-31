import { SubmissionStatus } from '../../common/enums/submission-status.enum';
export declare class UpdateSubmissionDto {
    challengeId?: string;
    userId?: string;
    submissionUrl?: string;
    description?: string;
    status?: SubmissionStatus;
    feedback?: string;
    score?: number;
}
