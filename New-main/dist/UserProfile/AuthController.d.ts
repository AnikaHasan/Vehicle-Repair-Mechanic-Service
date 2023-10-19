import { LoginUserDto } from './Dto/AddUserDto';
import { AuthService } from './Services/Login.service';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    signin(body: LoginUserDto, session: any): Promise<import("./Entity/Admin").User>;
    logout(session: any): void;
    profile(session: any): Promise<import("./Entity/Admin").User>;
}
