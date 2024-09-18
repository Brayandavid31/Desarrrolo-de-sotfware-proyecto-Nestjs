import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
export declare class VehiculoService {
    Carro: any[];
    create(createVehiculoDto: CreateVehiculoDto): string;
    findAll(): any[];
    findOne(placa: String): any;
    update(id: number, updateVehiculoDto: UpdateVehiculoDto): string;
    remove(placa: String): string;
}
