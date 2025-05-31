
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from './entities/submission.entity';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto): Promise<Submission> {
    const submission = this.submissionsRepository.create(createSubmissionDto);
    return await this.submissionsRepository.save(submission);
  }

  async findAll(): Promise<Submission[]> {
    return await this.submissionsRepository.find({
      relations: ['user', 'challenge'],
      order: { submittedAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Submission> {
    const submission = await this.submissionsRepository.findOne({
      where: { id },
      relations: ['user', 'challenge'],
    });
    
    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }
    
    return submission;
  }

  async findByChallengeId(challengeId: string): Promise<Submission[]> {
    return await this.submissionsRepository.find({
      where: { challengeId },
      relations: ['user'],
      order: { submittedAt: 'DESC' },
    });
  }

  async findByUserId(userId: string): Promise<Submission[]> {
    return await this.submissionsRepository.find({
      where: { userId },
      relations: ['challenge'],
      order: { submittedAt: 'DESC' },
    });
  }

  async update(id: string, updateSubmissionDto: UpdateSubmissionDto): Promise<Submission> {
    const updateData = { ...updateSubmissionDto };
    
    // Set reviewedAt timestamp when status is updated
    if (updateSubmissionDto.status && updateSubmissionDto.status !== 'pending') {
      updateData['reviewedAt'] = new Date();
    }
    
    await this.submissionsRepository.update(id, updateData);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.submissionsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }
  }
}
