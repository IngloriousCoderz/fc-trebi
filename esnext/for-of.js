const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

const arr = [1, 2, 3, 4, 5];

for (let key in arr) {
  console.log(key, arr[key]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

for (let item of arr) {
  console.log(item, arr.indexOf(item));
}
