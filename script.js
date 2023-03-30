async function getAllTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const todos = await res.json();
  console.log(todos);
}

window.addEventListener("DOMContentLoaded", getAllTodos);
