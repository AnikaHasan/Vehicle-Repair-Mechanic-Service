import { MechanicService } from './Services/Mechanicservices';
import { tblMechanic } from './Entity/Mechanic';
import { MechanicDTO } from './Dto/MechanicDto';
export declare class MechanicController {
    private readonly mechanicService;
    constructor(mechanicService: MechanicService);
    findAll(): Promise<tblMechanic[]>;
    findName(MechanicId: number, mechanicDTO: MechanicDTO): Promise<tblMechanic>;
    create(mechanicDTO: MechanicDTO): Promise<tblMechanic>;
    update(id: number, mechanicDTO: MechanicDTO): Promise<void>;
    delete(id: number): Promise<void>;
    findByCity(mechanicDTO: MechanicDTO): Promise<tblMechanic[]>;
}
