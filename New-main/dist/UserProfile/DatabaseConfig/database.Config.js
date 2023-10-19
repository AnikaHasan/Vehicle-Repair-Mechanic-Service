"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModulemosque = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Admin_1 = require("../Entity/Admin");
const AdminService_1 = require("../Services/AdminService");
const AdminController_1 = require("../AdminController");
const Product_Entity_1 = require("../Entity/Product.Entity");
const Product_Services_1 = require("../Services/Product.Services");
const ProductController_1 = require("../ProductController");
const AuthGurd_1 = require("../Authgourd/AuthGurd");
const tblItem_1 = require("../Entity/tblItem");
const Mechanic_1 = require("../Entity/Mechanic");
const Mechanicservices_1 = require("../Services/Mechanicservices");
const MechanicController_1 = require("../MechanicController");
const Slideshow_1 = require("../Entity/Slideshow");
let DatabaseModulemosque = exports.DatabaseModulemosque = class DatabaseModulemosque {
};
exports.DatabaseModulemosque = DatabaseModulemosque = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'ecommerce',
                autoLoadEntities: true,
                synchronize: true,
            }), typeorm_1.TypeOrmModule.forFeature([Admin_1.User, Product_Entity_1.ProductEntity, tblItem_1.tblItem, Mechanic_1.tblMechanic, Slideshow_1.SlideShowEntity])
        ],
        providers: [AdminService_1.AdminService, Product_Services_1.ProductService, AuthGurd_1.AuthGuard, Mechanicservices_1.MechanicService],
        controllers: [AdminController_1.AdminController, ProductController_1.ProductController, MechanicController_1.MechanicController],
    })
], DatabaseModulemosque);
//# sourceMappingURL=database.Config.js.map