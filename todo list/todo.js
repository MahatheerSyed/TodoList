let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

//add the list items to list
function addTodo() {
  let task = document.getElementById("task");
  let taskText = task.value;
  if (taskText) {
    todoArray.push({ text: taskText, checked: true });
    localStorage.setItem("todos", JSON.stringify(todoArray));
    task.value = "";
  }
  Display();
}

// displays the todo list
function Display() {
  let items = document.getElementById("items");
  items.innerHTML = "";

  todoArray.forEach((todo, index) => {
    let div = document.createElement("div");
    div.classList.add("list");

    // creating edcheckedbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //update checkbox status
    checkbox.checked = todoArray[index].checked;
    checkbox.addEventListener("click", () => toogle(index));
    div.appendChild(checkbox);

    //creating list items
    let listItem = document.createElement("li");
    listItem.innerText = todo.text;
    div.appendChild(listItem);

    //creating delete icon
    let delIcon = document.createElement("i");
    delIcon.classList.add("fas", "fa-times");
    div.appendChild(delIcon);
    delIcon.onclick = () => removeTodo(index);
    items.appendChild(div);
  });
}

//removes list items to list
function removeTodo(index) {
  todoArray.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  Display();
}

//toogles the checkbox status
function toogle(index) {
  todoArray[index].checked = !todoArray[index].checked;
  localStorage.setItem("todos", JSON.stringify(todoArray));
  Display();
}

// initially displays the list items
Display();
