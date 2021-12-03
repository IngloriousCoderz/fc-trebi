console.log("Before...");

setTimeout(() => {
  console.log("Where am I?");

  setTimeout(() => {
    console.log("...after.");
  }, 1000);
}, 1000);

$.getJSON("http://localhost:3000/users", handleUsers, handleError);

function handleUsers(response) {
  console.log(response);

  $.getJSON("http://localhost:3000/users/1", handleUser, handleError);
}

function handleUser(response) {
  console.log(response);

  $.getJSON(
    "http://localhost:3000/users/1/friends",
    handleFriends,
    handleError
  );
}

function handleFriends(response) {
  console.log(response);
}

function handleError(error) {
  console.error(error);
}

button.addEventHandler((event) => console.log(event));

arr.map((item, index, arr) => {});
arr.reduce((acc, item, index, arr) => {});
