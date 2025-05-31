import { SkillCategory } from '../../common/enums/skill-category.enum';
export declare class CreateUserDto {
    walletAddress: string;
    username: string;
    email?: string;
    profileImage?: string;
    bio?: string;
    skillCategories?: SkillCategory[];
}
