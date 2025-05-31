import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from './entities/challenge.entity';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { SkillCategory } from '../common/enums/skill-category.enum';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectRepository(Challenge)
    private challengesRepository: Repository<Challenge>,
  ) {}

  async create(createChallengeDto: CreateChallengeDto): Promise<Challenge> {
    const challenge = this.challengesRepository.create(createChallengeDto);
    return await this.challengesRepository.save(challenge);
  }

  async findAll(): Promise<Challenge[]> {
    return await this.challengesRepository.find({
      relations: ['creator', 'submissions'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Challenge> {
    const challenge = await this.challengesRepository.findOne({
      where: { id },
      relations: ['creator', 'submissions', 'submissions.user'],
    });
    
    if (!challenge) {
      throw new NotFoundException(`Challenge with ID ${id} not found`);
    }
    
    return challenge;
  }

  async findByCategory(category: SkillCategory): Promise<Challenge[]> {
    return await this.challengesRepository.find({
      where: { category },
      relations: ['creator'],
      order: { createdAt: 'DESC' },
    });
  }

  async update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<Challenge> {
    await this.challengesRepository.update(id, updateChallengeDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.challengesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Challenge with ID ${id} not found`);
    }
  }
}