export class Vehicle {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }
}
