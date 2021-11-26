// IIFE - Immediately Invoked Function Expression
((global) => {
  var a = 2;
  var b = 3;
  console.log(a, b);
  global.a = a;
})(window);
