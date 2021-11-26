const arr = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7];
const set = new Set(arr);
const arrWithoutDuplicates = [...set];
console.log(arrWithoutDuplicates);

const anotherArr = [...new Set([1, 2, 2, 3, 4, 4, 5, 5, 6, 7])];
console.log(anotherArr);
