"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const submission_entity_1 = require("./entities/submission.entity");
let SubmissionsService = class SubmissionsService {
    constructor(submissionsRepository) {
        this.submissionsRepository = submissionsRepository;
    }
    async create(createSubmissionDto) {
        const submission = this.submissionsRepository.create(createSubmissionDto);
        return await this.submissionsRepository.save(submission);
    }
    async findAll() {
        return await this.submissionsRepository.find({
            relations: ['user', 'challenge'],
            order: { submittedAt: 'DESC' },
        });
    }
    async findOne(id) {
        const submission = await this.submissionsRepository.findOne({
            where: { id },
            relations: ['user', 'challenge'],
        });
        if (!submission) {
            throw new common_1.NotFoundException(`Submission with ID ${id} not found`);
        }
        return submission;
    }
    async findByChallengeId(challengeId) {
        return await this.submissionsRepository.find({
            where: { challengeId },
            relations: ['user'],
            order: { submittedAt: 'DESC' },
        });
    }
    async findByUserId(userId) {
        return await this.submissionsRepository.find({
            where: { userId },
            relations: ['challenge'],
            order: { submittedAt: 'DESC' },
        });
    }
    async update(id, updateSubmissionDto) {
        const updateData = { ...updateSubmissionDto };
        if (updateSubmissionDto.status && updateSubmissionDto.status !== 'pending') {
            updateData['reviewedAt'] = new Date();
        }
        await this.submissionsRepository.update(id, updateData);
        return await this.findOne(id);
    }
    async remove(id) {
        const result = await this.submissionsRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Submission with ID ${id} not found`);
        }
    }
};
exports.SubmissionsService = SubmissionsService;
exports.SubmissionsService = SubmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(submission_entity_1.Submission)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubmissionsService);
//# sourceMappingURL=submissions.service.js.map