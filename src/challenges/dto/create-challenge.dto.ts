import { IsString, IsEnum, IsNumber, IsOptional, IsDateString, IsObject } from 'class-validator';
import { SkillCategory } from '../../common/enums/skill-category.enum';
import { ChallengeDifficulty } from '../entities/challenge.entity';

export class CreateChallengeDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(SkillCategory)
  category: SkillCategory;

  @IsEnum(ChallengeDifficulty)
  difficulty: ChallengeDifficulty;

  @IsNumber()
  reward: number;

  @IsDateString()
  @IsOptional()
  deadline?: string;

  @IsString()
  creatorId: string;

  @IsObject()
  @IsOptional()
  requirements?: any;
}