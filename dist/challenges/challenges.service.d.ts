import { Repository } from 'typeorm';
import { Challenge } from './entities/challenge.entity';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { SkillCategory } from '../common/enums/skill-category.enum';
export declare class ChallengesService {
    private challengesRepository;
    constructor(challengesRepository: Repository<Challenge>);
    create(createChallengeDto: CreateChallengeDto): Promise<Challenge>;
    findAll(): Promise<Challenge[]>;
    findOne(id: string): Promise<Challenge>;
    findByCategory(category: SkillCategory): Promise<Challenge[]>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<Challenge>;
    remove(id: string): Promise<void>;
}
