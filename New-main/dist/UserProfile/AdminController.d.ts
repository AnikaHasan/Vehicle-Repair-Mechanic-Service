import { AdminService } from './Services/AdminService';
import { AddUserDto, LoginUserDto, UpdateUserDto } from './Dto/AddUserDto';
import { User } from './Entity/Admin';
export declare class AdminController {
    private readonly AdminService;
    constructor(AdminService: AdminService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: AddUserDto): Promise<AddUserDto & User>;
    update(id: number, user: UpdateUserDto): Promise<void>;
    delete(id: number): Promise<void>;
    signin(body: LoginUserDto, session: any): Promise<User>;
    logout(session: any): {
        message: string;
    };
    profile(session: Record<string, any>): Promise<string>;
}
