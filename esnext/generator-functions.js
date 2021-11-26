function* iterator() {
  yield 1;
  yield 2;
  return 3;
}

const it = iterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
