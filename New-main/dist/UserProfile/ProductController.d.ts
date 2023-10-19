import { ProductService } from './Services/Product.Services';
import { ProductEntity } from './Entity/Product.Entity';
import { ProductDto } from './Dto/Product.Dto';
import { SlideShowDto } from './Dto/SlideShowDto';
export declare class ProductController {
    private readonly AdminService;
    constructor(AdminService: ProductService);
    findAll(): Promise<ProductEntity[]>;
    create(Product: ProductDto): Promise<ProductEntity>;
    update(id: number, ProductEntity: ProductDto): Promise<void>;
    delete(id: number): Promise<void>;
    getSlideshow(): Promise<import("./Entity/Slideshow").SlideShowEntity[]>;
    createSlideshow(slideShowDto: SlideShowDto): Promise<SlideShowDto & import("./Entity/Slideshow").SlideShowEntity>;
}
