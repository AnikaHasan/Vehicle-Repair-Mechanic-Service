import { Repository } from 'typeorm';
import { ProductEntity } from '../Entity/Product.Entity';
import { ProductDto } from '../Dto/Product.Dto';
import { SlideShowEntity } from '../Entity/Slideshow';
import { SlideShowDto } from '../Dto/SlideShowDto';
export declare class ProductService {
    private readonly repo;
    private readonly slideShow;
    constructor(repo: Repository<ProductEntity>, slideShow: Repository<SlideShowEntity>);
    findAll(): Promise<ProductEntity[]>;
    create(user: ProductDto): Promise<ProductEntity>;
    update(id: number, user: ProductDto): Promise<void>;
    delete(id: number): Promise<void>;
    findSlideShow(): Promise<SlideShowEntity[]>;
    createSlideShow(user: SlideShowDto): Promise<SlideShowDto & SlideShowEntity>;
}
