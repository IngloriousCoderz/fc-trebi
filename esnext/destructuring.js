const propertyName = "age";

const person = { name: "Antony", arms: 2 };
person.age = 39;
person.age = 40;
console.log(person);

// const name = person.name
// const myAge = person.age

const { name, age: myAge } = person;

const items = [1, 2, 3];
console.log(Array.isArray(items));

// const firstItem = items[0];
// const secondItem = items[1];

const [, secondItem] = items;
console.log(secondItem);
