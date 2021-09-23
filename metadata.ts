import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "blue";

  @piloti
  @markFunction
  fly(): void {
    console.log("vrrrrrrrr");
  }
}

function markFunction(target: Plane, key: string): void {
  Reflect.defineMetadata("secret", 2111, target, key);
}

function piloti(target: Plane, key: string): void {
  Reflect.defineMetadata("pilot", "Kema", target, key);
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

const pilot = Reflect.getMetadata("pilot", Plane.prototype, "fly");

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

console.log(pilot);
console.log(secret);

