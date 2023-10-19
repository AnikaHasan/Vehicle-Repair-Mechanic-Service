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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Admin_1 = require("../Entity/Admin");
let AdminService = exports.AdminService = class AdminService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        var data = await this.repo.find();
        return data;
    }
    async findOne(UserId) {
        return await this.repo.findOneBy({ UserId });
    }
    async findemail(UserEmail) {
        return await this.repo.findOneBy({ UserEmail });
    }
    async findpassword(UserPassword) {
        return await this.repo.findOneBy({ UserPassword });
    }
    async create(user) {
        console.log("Service" + user.UserPassword);
        return await this.repo.save(user);
    }
    async update(id, user) {
        await this.repo.update(id, user);
    }
    async delete(id) {
        console.log("delete Service" + id);
        await this.repo.delete(id);
    }
    async signin(email, password) {
        const user = await this.findemail(email);
        if (!user) {
            console.log("User not found");
            throw new common_1.NotFoundException('User not found');
        }
        if (user.Role == "admin") {
            console.log("admin");
            return user;
        }
        else if (user.Role == "mechanic") {
            console.log("mechanic");
            return user;
        }
        else if (user.Role == "user") {
            console.log("mosjid");
            return user;
        }
        ;
    }
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Admin_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=AdminService.js.map