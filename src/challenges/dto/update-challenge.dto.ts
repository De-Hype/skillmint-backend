import { IsString, IsEnum, IsNumber, IsOptional, IsDateString, IsObject } from 'class-validator';
import { SkillCategory } from '../../common/enums/skill-category.enum';
import { ChallengeDifficulty } from '../entities/challenge.entity';

export class UpdateChallengeDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(SkillCategory)
  category?: SkillCategory;

  @IsOptional()
  @IsEnum(ChallengeDifficulty)
  difficulty?: ChallengeDifficulty;

  @IsOptional()
  @IsNumber()
  reward?: number;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsString()
  creatorId?: string;

  @IsOptional()
  @IsObject()
  requirements?: any;
}
