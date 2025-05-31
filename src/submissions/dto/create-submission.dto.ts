import { IsString, IsOptional } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  challengeId: string;

  @IsString()
  userId: string;

  @IsString()
  submissionUrl: string;

  @IsString()
  description: string;
}
