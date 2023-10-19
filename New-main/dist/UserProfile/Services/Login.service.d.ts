import { User } from '../Entity/Admin';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly repo;
    constructor(repo: Repository<User>);
    findeOne(UserId: number): Promise<User>;
    findemail(UserEmail: string): Promise<User>;
    findpassword(UserPassword: string): Promise<User>;
    signin(email: string, password: string): Promise<User>;
}
