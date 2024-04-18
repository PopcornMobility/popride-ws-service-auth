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
const common_1 = require("@nestjs/common");
const redis_cache_service_1 = require("cityride-redis-cache/dist/redis-cache/redis-cache.service");
const jwt_1 = require("@nestjs/jwt");
const axios = require("axios");
let AuthService = class AuthService {
    constructor(redisCache, jwtSvc) {
        this.redisCache = redisCache;
        this.jwtSvc = jwtSvc;
        this.keyPrefix = "token";
    }
    async getAllUsers(token) {
        return await this.redisCache.getAllPairsByKeyPattern(`${this.keyPrefix}/*`);
    }
    async getUser(key) {
        return await this.redisCache.getValue(`${this.keyPrefix}/${key}`);
    }
    async insertuUser(key, value) {
        return await this.redisCache.insertPair(`${this.keyPrefix}/${key}`, value, "EX", 3600);
    }
    async deleteUser(key) {
        const result = await this.redisCache.deletePair(`${this.keyPrefix}/${key}`);
        return result;
    }
    async Authenticate(token) {
        let response = await axios.get(`http://app.prod.taxiapp.ro/api/v1/me`, { headers: { 'Authorization': `${token}` } });
        return response.data.user;
    }
    async Decode(token) {
        return this.jwtSvc.decode(token);
    }
    async CheckJwtToken(token) {
        try {
            let user = await this.jwtSvc.verifyAsync(token);
            if (typeof user === 'undefined' || typeof user.id === 'undefined' || user.id <= 0) {
                throw new common_1.UnauthorizedException("token unauthorized");
            }
            return user;
        }
        catch (e) {
            console.log(e);
            throw new common_1.UnauthorizedException("token unauthorized");
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    common_1.UseInterceptors(),
    __metadata("design:paramtypes", [redis_cache_service_1.RedisCacheService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
