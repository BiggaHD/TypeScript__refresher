// Basic example:
const add = (n1: number, n2: number, showResult: boolean, phrase: string): void => {
  const result = n1 + n2;
  showResult ? console.log(phrase + result) : console.log(result);
  }

let number1: number;
number1 = 5;

const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);


// More advance example /w interfaces:
interface Bird {
  type: 'bird';
  flyingSpeed: number;
  canFly: boolean;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
  canFly: boolean;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed, fly, extra;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      fly = animal.canFly  
      break;
      case 'horse':
        speed = animal.runningSpeed;
        fly = animal.canFly
      }
      extra = fly === true ? "and it can fly." : "but it cannot fly.";
  console.log(`${animal.type} is moving at speed: ${speed}, ${extra}`);
}

moveAnimal({type: 'bird', flyingSpeed: 99, canFly: true});
moveAnimal({type: 'horse', runningSpeed: 66, canFly: false});


// Objects, Enums, Arrays exaples:
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Slim Shady',
  age: 31,
  hobbies: ['Coding', 'More coding'],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}