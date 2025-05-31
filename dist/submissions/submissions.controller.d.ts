import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
export declare class SubmissionsController {
    private readonly submissionsService;
    constructor(submissionsService: SubmissionsService);
    create(createSubmissionDto: CreateSubmissionDto): Promise<import("./entities/submission.entity").Submission>;
    findAll(): Promise<import("./entities/submission.entity").Submission[]>;
    findOne(id: string): Promise<import("./entities/submission.entity").Submission>;
    findByChallengeId(challengeId: string): Promise<import("./entities/submission.entity").Submission[]>;
    findByUserId(userId: string): Promise<import("./entities/submission.entity").Submission[]>;
    update(id: string, updateSubmissionDto: UpdateSubmissionDto): Promise<import("./entities/submission.entity").Submission>;
    remove(id: string): Promise<void>;
}
