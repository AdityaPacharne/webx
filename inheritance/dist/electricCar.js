"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = void 0;
const car_1 = require("./car");
class ElectricCar extends car_1.Car {
    move() {
        console.log(`${this.name} is gliding silently with electric power`);
    }
}
exports.ElectricCar = ElectricCar;
