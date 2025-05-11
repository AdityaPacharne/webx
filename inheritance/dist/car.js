"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    move() {
        console.log(`${this.name} is driving on the road`);
    }
}
exports.Car = Car;
