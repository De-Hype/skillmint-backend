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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = exports.ChallengeDifficulty = void 0;
const typeorm_1 = require("typeorm");
const skill_category_enum_1 = require("../../common/enums/skill-category.enum");
const challenge_status_enum_1 = require("../../common/enums/challenge-status.enum");
const user_entity_1 = require("../../users/entities/user.entity");
const submission_entity_1 = require("../../submissions/entities/submission.entity");
var ChallengeDifficulty;
(function (ChallengeDifficulty) {
    ChallengeDifficulty["BEGINNER"] = "beginner";
    ChallengeDifficulty["INTERMEDIATE"] = "intermediate";
    ChallengeDifficulty["ADVANCED"] = "advanced";
    ChallengeDifficulty["EXPERT"] = "expert";
})(ChallengeDifficulty || (exports.ChallengeDifficulty = ChallengeDifficulty = {}));
let Challenge = class Challenge {
};
exports.Challenge = Challenge;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Challenge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Challenge.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: skill_category_enum_1.SkillCategory }),
    __metadata("design:type", String)
], Challenge.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ChallengeDifficulty }),
    __metadata("design:type", String)
], Challenge.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Challenge.prototype, "reward", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Challenge.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: challenge_status_enum_1.ChallengeStatus, default: challenge_status_enum_1.ChallengeStatus.DRAFT }),
    __metadata("design:type", String)
], Challenge.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Challenge.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Challenge.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdChallenges),
    (0, typeorm_1.JoinColumn)({ name: 'creatorId' }),
    __metadata("design:type", user_entity_1.User)
], Challenge.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => submission_entity_1.Submission, submission => submission.challenge),
    __metadata("design:type", Array)
], Challenge.prototype, "submissions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Challenge.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Challenge.prototype, "updatedAt", void 0);
exports.Challenge = Challenge = __decorate([
    (0, typeorm_1.Entity)('challenges')
], Challenge);
//# sourceMappingURL=challenge.entity.js.map