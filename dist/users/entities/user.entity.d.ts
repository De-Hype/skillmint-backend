import { SkillCategory } from '../../common/enums/skill-category.enum';
import { Challenge } from '../../challenges/entities/challenge.entity';
import { Submission } from '../../submissions/entities/submission.entity';
import { Badge } from '../../badges/entities/badge.entity';
export declare class User {
    id: string;
    walletAddress: string;
    username: string;
    email: string;
    profileImage: string;
    bio: string;
    skillCategories: SkillCategory[];
    totalEarnings: number;
    reputation: number;
    createdChallenges: Challenge[];
    submissions: Submission[];
    badges: Badge[];
    createdAt: Date;
    updatedAt: Date;
}
