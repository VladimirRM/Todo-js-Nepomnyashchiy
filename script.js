document.getElementById("addTodo").addEventListener("click", async () => {
  const input = document.getElementById("todoText");
  const title = input.value;
  if (title) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    });
    const todo = await res.json();
    todoToHtml(todo);
    input.value = "";
  }
});
console.log("addTodo");

async function getAllTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const todos = await res.json();
  console.log(todos);
  todos.forEach((todo) => todoToHtml(todo));
}

window.addEventListener("DOMContentLoaded", getAllTodos);

function todoToHtml({ id, completed, title }) {
  const todoLIst = document.getElementById("todos");
  todoLIst.insertAdjacentHTML(
    "beforeend",
    `
  <div class="form-check" id='todo${id}'>
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input"  ${
      completed && "checked"
    } />
  ${title}
  </label>
  <button onclick="deleteTodo(${id})"
    type="button"
    class="btn-close"
    aria-label="Close"
    style="font-size: 10px"
  ></button>
</div>
  `
  );
}
async function deleteTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    document.getElementById(`todo${id}`).remove();
  }
}
