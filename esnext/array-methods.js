const arr = [1, 2, 3, 4, 5];

{
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    const index = i;
    const item = arr[i];
    // console.log(index, item);
    acc += item;
  }
  console.log(acc);
  /*
  acc = 0
  acc += 1 -> acc = 1
  acc += 2 -> acc = 3
  */
}

{
  let acc = 0;
  for (let item of arr) {
    // console.log(item);
    acc += item;
  }
  console.log(acc);
}

{
  let acc = 0;
  arr.forEach((item, index) => {
    // console.log(index, item);
    acc += item;
  });
  console.log(acc);
}

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

const squares = arr.map(square);
console.log(squares, arr);

const evens = arr.filter(isEven);
console.log(evens);

const firstEven = arr.find(isEven);
console.log(firstEven);

const firstEvenIndex = arr.findIndex(isEven);
console.log(firstEvenIndex);

const hasEven = arr.some(isEven);
console.log(hasEven);

const allEvens = arr.every(isEven);
console.log(allEvens);

{
  const sumOfItems = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(sumOfItems);
}

{
  const sumOfItems = arr.reduce(sum);
  console.log(sumOfItems);
}

{
  function sumOfSquareEvens(arr) {
    let sum = 0;
    for (let item of arr) {
      if (isEven(item)) {
        const squaredItem = square(item);
        sum += squaredItem;
      }
    }
    return sum;
  }
  console.log(sumOfSquareEvens(arr));
}

{
  function sumOfSquareEvens(arr) {
    const evens = arr.filter(isEven);
    const squares = evens.map(square);
    const sumOfItems = squares.reduce(sum);
    return sumOfItems;
  }
  console.log(sumOfSquareEvens(arr));
}

{
  function sumOfSquareEvens(arr) {
    return arr.filter(isEven).map(square).reduce(sum);
  }
  console.log(sumOfSquareEvens(arr));
}

{
  function sumOfEvenSquares(arr) {
    let sum = 0;
    for (let item of arr) {
      const squaredItem = square(item);
      if (isEven(squaredItem)) {
        sum += squaredItem;
      }
    }
    return sum;
  }
  console.log(sumOfEvenSquares(arr));
}

function sumOfEvenSquares(arr) {
  return arr //
    .map(square)
    .filter(isEven)
    .reduce(sum);
}
console.log(sumOfEvenSquares(arr));
