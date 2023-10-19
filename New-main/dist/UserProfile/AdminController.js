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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const AdminService_1 = require("./Services/AdminService");
const AddUserDto_1 = require("./Dto/AddUserDto");
let AdminController = exports.AdminController = class AdminController {
    constructor(AdminService) {
        this.AdminService = AdminService;
    }
    async findAll() {
        return await this.AdminService.findAll();
    }
    async findOne(id) {
        return await this.AdminService.findOne(id);
    }
    async create(user) {
        return await this.AdminService.create(user);
    }
    async update(id, user) {
        await this.AdminService.update(id, user);
    }
    async delete(id) {
        console.log("delete" + id);
        await this.AdminService.delete(id);
    }
    async signin(body, session) {
        const user = await this.AdminService.signin(body.UserEmail, body.UserPassword);
        session.userId = user.UserId;
        console.log("signin" + session.userId);
        return user;
    }
    logout(session) {
        console.log("logout" + session.userId);
        session.userId = null;
        session.destroy();
        console.log("logout" + session.userId);
        return { message: 'Signout successful' };
    }
    async profile(session) {
        const user = await this.AdminService.findOne(session.userId);
        return user + "profile";
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddUserDto_1.AddUserDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, AddUserDto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddUserDto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "profile", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [AdminService_1.AdminService])
], AdminController);
function hashPassword(UserPassword, arg1) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=AdminController.js.map