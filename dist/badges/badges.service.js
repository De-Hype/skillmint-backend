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
exports.BadgesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const badge_entity_1 = require("./entities/badge.entity");
let BadgesService = class BadgesService {
    constructor(badgesRepository) {
        this.badgesRepository = badgesRepository;
    }
    async create(createBadgeDto) {
        const badge = this.badgesRepository.create(createBadgeDto);
        return await this.badgesRepository.save(badge);
    }
    async findAll() {
        return await this.badgesRepository.find({
            relations: ['user', 'challenge'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const badge = await this.badgesRepository.findOne({
            where: { id },
            relations: ['user', 'challenge'],
        });
        if (!badge) {
            throw new common_1.NotFoundException(`Badge with ID ${id} not found`);
        }
        return badge;
    }
    async findByUserId(userId) {
        return await this.badgesRepository.find({
            where: { userId },
            relations: ['challenge'],
            order: { createdAt: 'DESC' },
        });
    }
    async mintNFTBadge(mintBadgeDto) {
        const badge = await this.findOne(mintBadgeDto.badgeId);
        const mockTokenId = `badge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const mockTxHash = `tx_${Math.random().toString(36).substr(2, 16)}`;
        await this.badgesRepository.update(badge.id, {
            nftTokenId: mockTokenId,
            transactionHash: mockTxHash,
            mintedAt: new Date(),
        });
        return await this.findOne(badge.id);
    }
    async remove(id) {
        const result = await this.badgesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Badge with ID ${id} not found`);
        }
    }
};
exports.BadgesService = BadgesService;
exports.BadgesService = BadgesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(badge_entity_1.Badge)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BadgesService);
//# sourceMappingURL=badges.service.js.map