import { Car } from "./car";

export class ElectricCar extends Car {
  override move(): void {
    console.log(`${this.name} is gliding silently with electric power`);
  }
}
