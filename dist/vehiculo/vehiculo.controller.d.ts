import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
export declare class VehiculoController {
    private readonly vehiculoService;
    constructor(vehiculoService: VehiculoService);
    create(createVehiculoDto: CreateVehiculoDto): string;
    findAll(): any[];
    findOne(placa: string): any;
    update(id: string, updateVehiculoDto: UpdateVehiculoDto): string;
    remove(placa: string): string;
}
