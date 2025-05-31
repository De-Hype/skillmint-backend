import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Badge } from './entities/badge.entity';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { MintBadgeDto } from './dto/mint-badge.dto';

@Injectable()
export class BadgesService {
  constructor(
    @InjectRepository(Badge)
    private badgesRepository: Repository<Badge>,
  ) {}

  async create(createBadgeDto: CreateBadgeDto): Promise<Badge> {
    const badge = this.badgesRepository.create(createBadgeDto);
    return await this.badgesRepository.save(badge);
  }

  async findAll(): Promise<Badge[]> {
    return await this.badgesRepository.find({
      relations: ['user', 'challenge'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Badge> {
    const badge = await this.badgesRepository.findOne({
      where: { id },
      relations: ['user', 'challenge'],
    });
    
    if (!badge) {
      throw new NotFoundException(`Badge with ID ${id} not found`);
    }
    
    return badge;
  }

  async findByUserId(userId: string): Promise<Badge[]> {
    return await this.badgesRepository.find({
      where: { userId },
      relations: ['challenge'],
      order: { createdAt: 'DESC' },
    });
  }

  async mintNFTBadge(mintBadgeDto: MintBadgeDto): Promise<Badge> {
    const badge = await this.findOne(mintBadgeDto.badgeId);
    
    // Simulate NFT minting process - in real implementation, 
    // this would interact with Cardano blockchain
    const mockTokenId = `badge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const mockTxHash = `tx_${Math.random().toString(36).substr(2, 16)}`;
    
    await this.badgesRepository.update(badge.id, {
      nftTokenId: mockTokenId,
      transactionHash: mockTxHash,
      mintedAt: new Date(),
    });
    
    return await this.findOne(badge.id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.badgesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Badge with ID ${id} not found`);
    }
  }
}