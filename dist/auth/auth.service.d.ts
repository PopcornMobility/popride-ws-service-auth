import { RedisCacheService } from 'cityride-redis-cache/dist/redis-cache/redis-cache.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly redisCache;
    private readonly jwtSvc;
    private readonly keyPrefix;
    constructor(redisCache: RedisCacheService, jwtSvc: JwtService);
    getAllUsers(token: string): Promise<any[]>;
    getUser(key: string): Promise<string>;
    insertuUser(key: string, value: string): Promise<any>;
    deleteUser(key: string): Promise<number>;
    Authenticate(token: string): Promise<any>;
    Decode(token: string): Promise<any>;
    CheckJwtToken(token: string): Promise<any>;
}
