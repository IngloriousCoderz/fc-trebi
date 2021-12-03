$.getJSON("http://localhost:3000/users")
  .then((response) => $.getJSON("http://localhost:3000/users/1"))
  .then((response) => $.getJSON("http://localhost:3000/users/1/friends"))
  .then((response) => console.log(response))
  .catch(handleError);

Promise.all([
  $.getJSON("http://localhost:3000/users/1"),
  $.getJSON("http://localhost:3000/users/2"),
  $.getJSON("http://localhost:3000/users/3"),
])
  .then((results) => {
    console.log(results);
  })
  .catch(handleError);

Promise.allSettled(promises);

setTimeout(() => {
  console.log("Hello delayed world!");
}, 1000);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello delayed world!");
  }, 1000);
});

promise.then((message) => {
  console.log(message);
});

const promise = new Promise((resolve, reject) => {
  fs.readdir(dir, function (err, response) {
    if (err) {
      reject(err);
    }
    resolve(response);
  });
});

const readdir = util.promisify(fs.readdir);

readdir.then();

const response = fs.readdirSync(dir);
