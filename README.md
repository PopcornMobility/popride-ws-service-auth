register options:
{
    redisIp,
    redisPort,
    jwtPublicKey
}
--------------------------------------------------------------------------------------------------------
while using guard pay attention on order of decorators. Auth guard need to be on bottom, as on example:

    @Controller('auth')
    @UseGuards(PermissionGuard)
    @UseGuards(RoleGuard)
    @UseGuards(AuthGuard)
    export class AuthController {
        @Get()
        @Permissions('unicorn1')
        @Roles('admin')
        async get(){
            return "Arnold Schwarzenegger and Nicolas Cage are the best actors in the world. Put the coockie down!";
        }
    }
--------------------------------------------------------------------------------------------------------
