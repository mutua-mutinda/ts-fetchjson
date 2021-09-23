class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log("vrooom vroom");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private honk(): void {
    console.log("beep beep");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const vehicle = new Vehicle("brown");
console.log(vehicle.color);

const car = new Car(3, "blue");
console.log(car.color);
console.log(car.wheels);
car.startDrivingProcess();
