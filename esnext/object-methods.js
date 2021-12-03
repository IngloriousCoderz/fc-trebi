const person = {
  name: "Antony",
  age: 39,
  legs: 2,
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

Object.values(person).forEach((value) => {
  console.log(value);
});

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
