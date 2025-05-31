import { IsString, IsOptional, IsEmail, IsEnum, IsArray } from 'class-validator';
import { SkillCategory } from '../../common/enums/skill-category.enum';

export class CreateUserDto {
  @IsString()
  walletAddress: string;

  @IsString()
  username: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsArray()
  @IsEnum(SkillCategory, { each: true })
  @IsOptional()
  skillCategories?: SkillCategory[];
}
