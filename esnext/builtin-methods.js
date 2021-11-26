const dest = { a: 1, b: 2 };
const src1 = { b: 3, c: 4 };
const src2 = { d: 5, e: 6 };

// const merge = Object.assign({}, dest, src1, src2);
const merge = { ...dest, ...src1, ...src2 };
console.log(merge, dest);
console.log(merge === dest);
