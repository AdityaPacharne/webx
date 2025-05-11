interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle implements Shape {
  constructor(private base: number, private height: number) {}
  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// Test
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(7),
  new Triangle(8, 6)
];

shapes.forEach((shape, i) => {
  console.log(`Shape ${i + 1} area: ${shape.getArea().toFixed(2)}`);
});
