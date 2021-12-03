$.getJSON("http://localhost:3000/users")
  .then((response) => $.getJSON("http://localhost:3000/users/1"))
  .then((response) => $.getJSON("http://localhost:3000/users/1/friends"))
  .then((response) => console.log(response))
  .catch(handleError)
  .finally(() => cleanUp());

async function fetchData() {
  try {
    const users = await $.getJSON("http://localhost:3000/users");
    const user = await $.getJSON("http://localhost:3000/users/1");
    const friends = await $.getJSON("http://localhost:3000/users/1/friends");

    const [users, user, friends] = await Promise.all([
      $.getJSON("http://localhost:3000/users"),
      $.getJSON("http://localhost:3000/users/1"),
      $.getJSON("http://localhost:3000/users/1/friends"),
    ]);
    console.log(friends);
  } catch (error) {
    console.error(error);
  } finally {
    cleanUp();
  }
}

async function fetchUser(id) {
  const user = await $.getJSON(`http://localhost:3000/users/${id}`);
  return user;
}

fetchUser(1).then((user) => console.log(user));
