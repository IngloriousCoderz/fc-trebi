// hello world
// HELLO WORLD
// HELLO WORLD!
// <p>HELLO WORLD!<p>

const shout = (str) => str.toUpperCase();
const punctuate = (punctuationMark) => (str) => str + punctuationMark;
const toHtml = (tag) => (str) => `<${tag}>${str}</${tag}>`;

const exclamate = punctuate("!");
const toParagraph = toHtml("p");

console.log(shout("hello world"));
console.log(exclamate("hello world"));
console.log(toParagraph("hello world"));

console.log(toParagraph(exclamate(shout("hello world"))));

let result = "hello world";
result = shout(result);
result = exclamate(result);
result = toParagraph(result);
console.log(result);

// pipe
// (f | g | h)(x) = h(g(f(x)))

// compose
// (f o g o h)(x) = f(g(h(x)))

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const transform = pipe(shout, punctuate("!"), toHtml("p"));
// const transform = compose(toParagraph, exclamate, shout);

console.log(transform("hello world"));
