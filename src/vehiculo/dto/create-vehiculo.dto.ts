import { IsString , IsNumber} from "class-validator";
export class CreateVehiculoDto {
    @IsString()
    marca:string;
    @IsString()
    placa:string;
    @IsNumber()
    modelo:number
}
