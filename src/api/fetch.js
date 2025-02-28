// api/fetch.js
export const fetchUsers = async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const users = await response.json();
  return users.data;
};

export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
};
