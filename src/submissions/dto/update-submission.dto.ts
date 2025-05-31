import { IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { SubmissionStatus } from '../../common/enums/submission-status.enum';

export class UpdateSubmissionDto {
  @IsOptional()
  @IsString()
  challengeId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  submissionUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(SubmissionStatus)
  status?: SubmissionStatus;

  @IsOptional()
  @IsString()
  feedback?: string;

  @IsOptional()
  @IsNumber()
  score?: number;
}
