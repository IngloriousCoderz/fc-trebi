// function declaration
// hoisting
function sum(a, b) {
  return a + b;
}

// function expression

const sum = function (a, b) {
  return a + b;
};

// arrow functions
// preserve context
const sum = (a, b) => {
  return a + b;
};

// sum: (x, y) -> x + y
const sum = (a, b) => a + b;

const x = 2;
const y = 3;
sum(x, y);

button.addEventListener("click", (event) => console.log(event));

button.addEventListener("click", handleClick);

otherButton.addEventListener("click", handleClick);

function handleClick(event) {
  console.log(this);
}
handleClick.bind(this);

handleClick();
