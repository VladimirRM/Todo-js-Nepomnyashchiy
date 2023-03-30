async function getAllTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todos = await res.json();
  console.log(todos);
}


window.addEventListener("DOMContentLoaded", getAllTodos);
