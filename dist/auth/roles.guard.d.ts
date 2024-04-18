import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
export declare class RolesGuard {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
