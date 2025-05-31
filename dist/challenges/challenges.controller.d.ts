import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { SkillCategory } from '../common/enums/skill-category.enum';
export declare class ChallengesController {
    private readonly challengesService;
    constructor(challengesService: ChallengesService);
    create(createChallengeDto: CreateChallengeDto): Promise<import("./entities/challenge.entity").Challenge>;
    findAll(): Promise<import("./entities/challenge.entity").Challenge[]>;
    findOne(id: string): Promise<import("./entities/challenge.entity").Challenge>;
    findByCategory(category: SkillCategory): Promise<import("./entities/challenge.entity").Challenge[]>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<import("./entities/challenge.entity").Challenge>;
    remove(id: string): Promise<void>;
}
