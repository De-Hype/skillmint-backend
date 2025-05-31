import { SkillCategory } from '../../common/enums/skill-category.enum';
export declare class UpdateUserDto {
    walletAddress?: string;
    username?: string;
    email?: string;
    profileImage?: string;
    bio?: string;
    skillCategories?: SkillCategory[];
}
