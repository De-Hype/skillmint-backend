import { IsString } from 'class-validator';

export class MintBadgeDto {
  @IsString()
  badgeId: string;

  @IsString()
  walletAddress: string;
}