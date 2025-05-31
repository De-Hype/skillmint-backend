import { SkillCategory } from '../../common/enums/skill-category.enum';
import { ChallengeStatus } from '../../common/enums/challenge-status.enum';
import { User } from '../../users/entities/user.entity';
import { Submission } from '../../submissions/entities/submission.entity';
export declare enum ChallengeDifficulty {
    BEGINNER = "beginner",
    INTERMEDIATE = "intermediate",
    ADVANCED = "advanced",
    EXPERT = "expert"
}
export declare class Challenge {
    id: string;
    title: string;
    description: string;
    category: SkillCategory;
    difficulty: ChallengeDifficulty;
    reward: number;
    deadline: Date;
    status: ChallengeStatus;
    requirements: any;
    creatorId: string;
    creator: User;
    submissions: Submission[];
    createdAt: Date;
    updatedAt: Date;
}
