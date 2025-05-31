import { User } from '../../users/entities/user.entity';
import { Challenge } from '../../challenges/entities/challenge.entity';
export declare class Badge {
    id: string;
    userId: string;
    challengeId: string;
    name: string;
    description: string;
    imageUrl: string;
    nftTokenId: string;
    transactionHash: string;
    user: User;
    challenge: Challenge;
    mintedAt: Date;
    createdAt: Date;
}
