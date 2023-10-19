import { Repository } from 'typeorm';
import { AddUserDto, UpdateUserDto } from '../Dto/AddUserDto';
import { User } from '../Entity/Admin';
export declare class AdminService {
    private readonly repo;
    constructor(repo: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(UserId: number): Promise<User>;
    findemail(UserEmail: string): Promise<User>;
    findpassword(UserPassword: string): Promise<User>;
    create(user: AddUserDto): Promise<AddUserDto & User>;
    update(id: number, user: UpdateUserDto): Promise<void>;
    delete(id: number): Promise<void>;
    signin(email: string, password: string): Promise<User>;
}
