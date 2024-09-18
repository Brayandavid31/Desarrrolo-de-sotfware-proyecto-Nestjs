import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculoService {
  Carro=[]
  create(createVehiculoDto: CreateVehiculoDto) {
    this.Carro.push(createVehiculoDto)
    return 'carro creado con exito';
   
  }
  findAll() {
    return this.Carro;
  }

  findOne(placa:String) {
    const carroBuscado = this.Carro.find(Carro =>Carro.placa === placa);
    if(carroBuscado== undefined)
    return `El carro con cedula : ${placa}, No existe`; 
    else
    return carroBuscado
  }

  

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(placa:String) {
    const indice = this.Carro.findIndex(carro => carro.placa === placa);
    if (indice=== -1)
    return `El carro con placa : ${placa}, No existe`;
    else{
      this.Carro.splice(indice,1)
      return `El carro  con placa : ${placa} eliminado......`;
    }
  
    
  }

 }