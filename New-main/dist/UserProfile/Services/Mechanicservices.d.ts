import { Repository } from 'typeorm';
import { tblMechanic } from '../Entity/Mechanic';
import { MechanicDTO } from '../Dto/MechanicDto';
export declare class MechanicService {
    private readonly repo;
    constructor(repo: Repository<tblMechanic>);
    findAll(): Promise<tblMechanic[]>;
    create(user: MechanicDTO): Promise<tblMechanic>;
    update(id: number, user: MechanicDTO): Promise<void>;
    delete(id: number): Promise<void>;
    find(MechanicId: number): Promise<tblMechanic>;
    findName(MechanicId: number, Name: MechanicDTO): Promise<tblMechanic>;
    findByCity(city: MechanicDTO): Promise<tblMechanic[]>;
}
