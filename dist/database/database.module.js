"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/entities/user.entity");
const challenge_entity_1 = require("../challenges/entities/challenge.entity");
const submission_entity_1 = require("../submissions/entities/submission.entity");
const badge_entity_1 = require("../badges/entities/badge.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    const databaseUrl = configService.get('DATABASE_URL');
                    const isProd = configService.get('NODE_ENV') === 'production';
                    if (databaseUrl) {
                        return {
                            type: 'postgres',
                            url: databaseUrl,
                            entities: [user_entity_1.User, challenge_entity_1.Challenge, submission_entity_1.Submission, badge_entity_1.Badge],
                            synchronize: !isProd,
                            logging: !isProd,
                            ssl: {
                                rejectUnauthorized: false,
                            },
                            extra: {
                                ssl: {
                                    rejectUnauthorized: false,
                                },
                                family: 4,
                            },
                        };
                    }
                    return {
                        type: 'postgres',
                        host: configService.get('DB_HOST'),
                        port: +configService.get('DB_PORT'),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_DATABASE'),
                        entities: [user_entity_1.User, challenge_entity_1.Challenge, submission_entity_1.Submission, badge_entity_1.Badge],
                        synchronize: !isProd,
                        logging: !isProd,
                        extra: {
                            family: 4,
                        },
                    };
                }
            }),
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map