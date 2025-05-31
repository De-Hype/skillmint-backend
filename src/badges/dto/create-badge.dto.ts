import { IsString } from 'class-validator';

export class CreateBadgeDto {
  @IsString()
  userId: string;

  @IsString()
  challengeId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}