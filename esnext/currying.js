function sum(a, b) {
  return a + b;
}

sum(2, 3);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sum = (a, b) => a + b;
const sum = (a) => (b) => a + b;

const sumTwo = sum(2);
sumTwo(3);
sumTwo(4);

const sumThree = sum(3);

[1, 2, 3, 4, 5].map(sum(3));

sum(2)(3);

const promotePerson = (id) => (event) =>
  console
    .log(id)

    [("Antony", "Giancarlo", "Gabriele", "Piercarlo", "Simone")].map(
      (person) => `
<li>
  <button onclick="${promotePerson(person.id)}"></button>
</li>
`
    );
