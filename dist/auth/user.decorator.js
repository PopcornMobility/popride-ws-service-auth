"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Usr = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=user.decorator.js.map