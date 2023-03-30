async function getAllTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const todos = await res.json();
  console.log(todos);
}

window.addEventListener("DOMContentLoaded", getAllTodos);

function todoToHtml({ id, completed, title }) {
  const todoLIst = document.getElementById("todos");
  todoLIst.insertAdjacentElement(
    "beforeend",
    `
  <div class="form-check" id='todo${id}'>
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" />
  ${title}
  </label>
  <button
    type="button"
    class="btn-close"
    aria-label="Close"
    style="font-size: 10px"
  ></button>
</div>
  `
  );
}
