// Make sure to create ts_config file and enable "experimentalDecorators"

@classDecorator
class Rocket {
  @testDecorator
  model: string = "Falcon 9";
  color: string = "white";
  company: string = "SpaceX";

  @testDecorator
  get formattedColor(): string {
    return `The color of the ${this.model} is ${this.color} and it was developed my ${this.company}`;
  }

  @logError("Error ➖ God speed")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator weight: number,
    @parameterDecorator launched: boolean
  ): void {
    speed === "lightning fast" ? console.log("🚀") : console.log("🐌");
    weight === 549.054 ? console.log("🦍") : console.log("🐜");
    launched ? console.log("🥂") : console.log("🤷‍♂️");
  }
}

// Decorator Factorie example:
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// Basic testing of implementations:
function classDecorator(constructor: typeof Rocket) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}
