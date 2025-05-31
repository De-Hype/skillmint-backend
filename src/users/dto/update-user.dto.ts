import { IsString, IsOptional, IsEmail, IsEnum, IsArray } from 'class-validator';
import { SkillCategory } from '../../common/enums/skill-category.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  walletAddress?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(SkillCategory, { each: true })
  skillCategories?: SkillCategory[];
}
