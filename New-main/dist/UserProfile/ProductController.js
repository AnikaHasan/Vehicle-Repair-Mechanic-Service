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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
;
const Product_Services_1 = require("./Services/Product.Services");
const Product_Dto_1 = require("./Dto/Product.Dto");
const SlideShowDto_1 = require("./Dto/SlideShowDto");
let ProductController = exports.ProductController = class ProductController {
    constructor(AdminService) {
        this.AdminService = AdminService;
    }
    async findAll() {
        return await this.AdminService.findAll();
    }
    async create(Product) {
        return await this.AdminService.create(Product);
    }
    async update(id, ProductEntity) {
        await this.AdminService.update(id, ProductEntity);
    }
    async delete(id) {
        console.log("delete" + id);
        await this.AdminService.delete(id);
    }
    async getSlideshow() {
        return await this.AdminService.findSlideShow();
    }
    async createSlideshow(slideShowDto) {
        return await this.AdminService.createSlideShow(slideShowDto);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_Dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Product_Dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/get/Slideshow'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getSlideshow", null);
__decorate([
    (0, common_1.Post)('/create/Slideshow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SlideShowDto_1.SlideShowDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createSlideshow", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('Product'),
    __metadata("design:paramtypes", [Product_Services_1.ProductService])
], ProductController);
//# sourceMappingURL=ProductController.js.map