const todoForm = document.querySelector(".todo-form");
const todoFormInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

let arr = [];

function deleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
  arr = JSON.parse(savedItem).filter((item) => {
    return li.id != item.id;
  });
  localStorage.setItem("todo", JSON.stringify(arr));
}

function addList(todoObject) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  li.id = todoObject.id;
  span.innerText = todoObject.text;
  button.innerText = "Delete";
  button.addEventListener("click", deleteButton);
}

function submitForm(event) {
  event.preventDefault();
  const todo = todoFormInput.value;
  todoFormInput.value = "";
  const todoObject = {
    text: todo,
    id: Date.now(),
  };
  arr.push(todoObject);
  addList(todoObject);
  localStorage.setItem("todo", JSON.stringify(arr));
}

const savedItem = localStorage.getItem("todo");

if (savedItem) {
  const parsedItem = JSON.parse(savedItem);
  arr = parsedItem;
  parsedItem.forEach((item) => {
    addList(item);
  });
}

todoForm.addEventListener("submit", submitForm);
