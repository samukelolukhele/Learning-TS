let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn =  25;
isLoggedIn = true;

let ninjas: string[] = [];

// ninjas = [20, 12];
ninjas = ['Yoshi', 'Mario'];

let mixed: (string|number|boolean)[] = []
mixed.push('hello');
mixed.push(20);
mixed.push(false);

console.log(mixed);

let uid: string|number;

uid = '123';
uid = 123;

let ninjaOne: object;

ninjaOne = { name: 'yodhi', age: 30}
// ninjaOne = 'Kell'

let ninjatTwo: {
  name: string,
  age: number,
  beltColour: string
}

ninjatTwo = { name: 'mario', age: 20, beltColour: 'black' }

