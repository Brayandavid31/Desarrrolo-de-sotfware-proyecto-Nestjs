"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoService = void 0;
const common_1 = require("@nestjs/common");
let VehiculoService = class VehiculoService {
    constructor() {
        this.Carro = [];
    }
    create(createVehiculoDto) {
        this.Carro.push(createVehiculoDto);
        return 'carro creado con exito';
    }
    findAll() {
        return this.Carro;
    }
    findOne(placa) {
        const carroBuscado = this.Carro.find(Carro => Carro.placa === placa);
        if (carroBuscado == undefined)
            return `El carro con cedula : ${placa}, No existe`;
        else
            return carroBuscado;
    }
    update(id, updateVehiculoDto) {
        return `This action updates a #${id} vehiculo`;
    }
    remove(placa) {
        const indice = this.Carro.findIndex(carro => carro.placa === placa);
        if (indice === -1)
            return `El carro con placa : ${placa}, No existe`;
        else {
            this.Carro.splice(indice, 1);
            return `El carro  con placa : ${placa} eliminado......`;
        }
    }
};
exports.VehiculoService = VehiculoService;
exports.VehiculoService = VehiculoService = __decorate([
    (0, common_1.Injectable)()
], VehiculoService);
//# sourceMappingURL=vehiculo.service.js.map