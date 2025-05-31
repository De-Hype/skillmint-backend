import { Repository } from 'typeorm';
import { Badge } from './entities/badge.entity';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { MintBadgeDto } from './dto/mint-badge.dto';
export declare class BadgesService {
    private badgesRepository;
    constructor(badgesRepository: Repository<Badge>);
    create(createBadgeDto: CreateBadgeDto): Promise<Badge>;
    findAll(): Promise<Badge[]>;
    findOne(id: string): Promise<Badge>;
    findByUserId(userId: string): Promise<Badge[]>;
    mintNFTBadge(mintBadgeDto: MintBadgeDto): Promise<Badge>;
    remove(id: string): Promise<void>;
}
