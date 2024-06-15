async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.json();
}

async function getFetchUrl(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");

  const res = await fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}

async function processUsers() {
  try {
    const users = await getFetchUrl(
      "https://jsonplaceholder.typicode.com/users"
    );
    users.forEach(async (user) => {
      const posts = await getFetchUrl(
        "https://jsonplaceholder.typicode.com/posts",
        { userId: user.id }
      );
      console.log(user.name + " " + posts.length);
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

processUsers();
