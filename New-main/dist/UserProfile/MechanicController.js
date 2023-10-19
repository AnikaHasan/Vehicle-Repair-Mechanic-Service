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
exports.MechanicController = void 0;
const common_1 = require("@nestjs/common");
const Mechanicservices_1 = require("./Services/Mechanicservices");
const MechanicDto_1 = require("./Dto/MechanicDto");
let MechanicController = exports.MechanicController = class MechanicController {
    constructor(mechanicService) {
        this.mechanicService = mechanicService;
    }
    async findAll() {
        return this.mechanicService.findAll();
    }
    async findName(MechanicId, mechanicDTO) {
        console.log("id", mechanicDTO);
        return this.mechanicService.findName(MechanicId, mechanicDTO);
    }
    async create(mechanicDTO) {
        return this.mechanicService.create(mechanicDTO);
    }
    async update(id, mechanicDTO) {
        await this.mechanicService.update(id, mechanicDTO);
    }
    async delete(id) {
        await this.mechanicService.delete(id);
    }
    async findByCity(mechanicDTO) {
        return this.mechanicService.findByCity(mechanicDTO);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, MechanicDto_1.MechanicDTO]),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "findName", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MechanicDto_1.MechanicDTO]),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, MechanicDto_1.MechanicDTO]),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/city'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MechanicDto_1.MechanicDTO]),
    __metadata("design:returntype", Promise)
], MechanicController.prototype, "findByCity", null);
exports.MechanicController = MechanicController = __decorate([
    (0, common_1.Controller)('mechanics'),
    __metadata("design:paramtypes", [Mechanicservices_1.MechanicService])
], MechanicController);
//# sourceMappingURL=MechanicController.js.map