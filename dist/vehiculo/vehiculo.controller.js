"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoController = void 0;
const common_1 = require("@nestjs/common");
const vehiculo_service_1 = require("./vehiculo.service");
const create_vehiculo_dto_1 = require("./dto/create-vehiculo.dto");
const update_vehiculo_dto_1 = require("./dto/update-vehiculo.dto");
let VehiculoController = class VehiculoController {
    constructor(vehiculoService) {
        this.vehiculoService = vehiculoService;
    }
    create(createVehiculoDto) {
        return this.vehiculoService.create(createVehiculoDto);
    }
    findAll() {
        return this.vehiculoService.findAll();
    }
    findOne(placa) {
        return this.vehiculoService.findOne(placa);
    }
    update(id, updateVehiculoDto) {
        return this.vehiculoService.update(+id, updateVehiculoDto);
    }
    remove(placa) {
        return this.vehiculoService.remove(placa);
    }
};
exports.VehiculoController = VehiculoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehiculo_dto_1.CreateVehiculoDto]),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('placa/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vehiculo_dto_1.UpdateVehiculoDto]),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('placa/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "remove", null);
exports.VehiculoController = VehiculoController = __decorate([
    (0, common_1.Controller)('vehiculo'),
    __metadata("design:paramtypes", [vehiculo_service_1.VehiculoService])
], VehiculoController);
//# sourceMappingURL=vehiculo.controller.js.map