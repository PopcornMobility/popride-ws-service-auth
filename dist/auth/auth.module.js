"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const redis_cache_module_1 = require("cityride-redis-cache/dist/redis-cache/redis-cache.module");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = AuthModule_1 = class AuthModule {
    static registerFrom(options) {
        console.log(options);
        console.log(`AUTHMODULE RECEIVED OPTIONS:${JSON.stringify(options)}`);
        let dynamicModule = {
            module: AuthModule_1,
            imports: [
                jwt_1.JwtModule.register({ secret: options.jwtPublicKey }),
                redis_cache_module_1.RedisCacheModule.registerFrom(options.redisUrl)
            ],
            providers: [],
            exports: [jwt_1.JwtModule, auth_service_1.AuthService]
        };
        return dynamicModule;
    }
};
AuthModule = AuthModule_1 = __decorate([
    common_1.Module({
        imports: [],
        controllers: [],
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map