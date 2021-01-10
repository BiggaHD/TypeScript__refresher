class NumberArray {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class StringArray {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Genric Constraints
class Plane {
  print() {
    console.log("I am a ✈");
  }
}

class Helicopter {
  print() {
    console.log("I am a 🚁");
  }
}

interface Printable {
  print(): void;
}

function printFlyingObjects<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printFlyingObjects<Plane>([new Plane(), new Plane()]);
printFlyingObjects<Helicopter>([new Helicopter(), new Helicopter()]);
