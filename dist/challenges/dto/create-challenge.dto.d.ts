import { SkillCategory } from '../../common/enums/skill-category.enum';
import { ChallengeDifficulty } from '../entities/challenge.entity';
export declare class CreateChallengeDto {
    title: string;
    description: string;
    category: SkillCategory;
    difficulty: ChallengeDifficulty;
    reward: number;
    deadline?: string;
    creatorId: string;
    requirements?: any;
}
