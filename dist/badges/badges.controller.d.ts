import { BadgesService } from './badges.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { MintBadgeDto } from './dto/mint-badge.dto';
export declare class BadgesController {
    private readonly badgesService;
    constructor(badgesService: BadgesService);
    create(createBadgeDto: CreateBadgeDto): Promise<import("./entities/badge.entity").Badge>;
    findAll(): Promise<import("./entities/badge.entity").Badge[]>;
    findOne(id: string): Promise<import("./entities/badge.entity").Badge>;
    findByUserId(userId: string): Promise<import("./entities/badge.entity").Badge[]>;
    mintNFTBadge(mintBadgeDto: MintBadgeDto): Promise<import("./entities/badge.entity").Badge>;
    remove(id: string): Promise<void>;
}
