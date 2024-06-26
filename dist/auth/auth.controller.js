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
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const permissions_decorator_1 = require("./permissions.decorator");
const roles_guard_1 = require("./roles.guard");
const roles_decorator_1 = require("./roles.decorator");
const permissions_guard_1 = require("./permissions.guard");
const user_decorator_1 = require("./user.decorator");
let AuthController = class AuthController {
    async get(user) {
        console.log(user);
        return;
    }
};
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles("driver"),
    permissions_decorator_1.Permissions(),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "get", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    common_1.UseGuards(permissions_guard_1.PermissionsGuard),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(auth_guard_1.AuthGuard)
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map