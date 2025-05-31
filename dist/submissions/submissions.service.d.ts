import { Repository } from 'typeorm';
import { Submission } from './entities/submission.entity';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
export declare class SubmissionsService {
    private submissionsRepository;
    constructor(submissionsRepository: Repository<Submission>);
    create(createSubmissionDto: CreateSubmissionDto): Promise<Submission>;
    findAll(): Promise<Submission[]>;
    findOne(id: string): Promise<Submission>;
    findByChallengeId(challengeId: string): Promise<Submission[]>;
    findByUserId(userId: string): Promise<Submission[]>;
    update(id: string, updateSubmissionDto: UpdateSubmissionDto): Promise<Submission>;
    remove(id: string): Promise<void>;
}
