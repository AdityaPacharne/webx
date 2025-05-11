import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
  override move(): void {
    console.log(`${this.name} is driving on the road`);
  }
}
