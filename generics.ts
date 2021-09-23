class Arrays<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new Arrays<string>(["efwegae"]);

new Arrays([2, 4, 5, 6, 7, 6]);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(["aefaerace"]);
printAnything([3, 5, 6, 74, 7, 5]);

//generic constraints

class Cars {
  print(): void {
    console.log("i am a car");
  }
}

class House {
  print(): void {
    console.log("i am a house");
  }
}

interface printable {
  print(): void;
}

function printCarOrHouse<T extends printable>(arr: T[]): void {
  for (let i = 0; i > arr.length; i++) {
    arr[i].print();
  }
}

printCarOrHouse([new House(), new Cars()]);
