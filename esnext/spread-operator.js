const items = [1, 2, 3, 4, 5];
const [, second, ...otherItems] = items;
console.log(second, otherItems);

const clonedItems = [...items];
console.log(clonedItems);

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, ...otherProperties } = obj;
console.log(a, b, otherProperties);

const clonedObj = { ...obj };
console.log(clonedObj);

// rest parameters: spread operator on function parameters
function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
