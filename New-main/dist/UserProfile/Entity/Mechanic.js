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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tblMechanic = void 0;
const typeorm_1 = require("typeorm");
let tblMechanic = exports.tblMechanic = class tblMechanic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("identity"),
    __metadata("design:type", Number)
], tblMechanic.prototype, "MechanicId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "MechanicName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "MechanicTypeName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "City", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "ActiveHours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "MobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblMechanic.prototype, "longitude", void 0);
exports.tblMechanic = tblMechanic = __decorate([
    (0, typeorm_1.Entity)()
], tblMechanic);
//# sourceMappingURL=Mechanic.js.map