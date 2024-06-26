import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
export declare class AuthGuard implements CanActivate {
    private readonly authSvc;
    constructor(authSvc: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
