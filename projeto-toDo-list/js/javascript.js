// elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const search = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// Funções
const saveTodo = (text, done = 0, save = 1) => {
  //Função para criar o template
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-todo");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(removeBtn);

  // Utilizando dados da localStorage
  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ text, done });
  }

  todoList.appendChild(todo); //Adiciona a div criada a div que já exites no HTML
  todoInput.value = ""; //Limpa o input
  todoInput.focus();
};

const toggleForms = () => {
  //Função que esconde e mostra as telas necéssarias 
  todoList.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  editForm.classList.toggle("hide");
};

const updateTodo = (text) => {
  //Atualiza a tarefa selecionada
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (oldInputValue === todoTitle.innerText) {
      todoTitle.innerText = text;
      updateTodoLocal(oldInputValue, text);
    }
  });
};

const getSearchTodos = (searchValue) => {
  //Função de buscar tarefa
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    const normalizedSearch = searchValue.toLowerCase();

    todo.style.display = "flex";

    if (!todoTitle.includes(normalizedSearch)) {
      todo.style.display = "none";
    }
  });
};

const filterTodo = (selectValue) => {
  //Filtra as tarefas 
  const todo = document.querySelectorAll(".todo");

  switch (selectValue) {
    case "all":
      todo.forEach((todo) => (todo.style.display = "flex"));
      break;

    case "done":
      todo.forEach((todo) =>
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );
      break;

    case "A fazer":
      todo.forEach((todo) =>
        todo.classList.contains("done")
          ? (todo.style.display = "none")
          : (todo.style.display = "flex")
      );
      break;
    default:
      break;
  }
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  //Evento para adicionar as tarefas
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  //Execulta a tarefa chamada
  const element = e.target;
  const parentEl = element.closest("div");
  let todoTitle;

  console.log(element)

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (element.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
    updateTodoLocalStorage(todoTitle);
  }

  if (element.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }

  if (element.classList.contains("remove-todo")) {
    parentEl.remove();

    removeTodos(todoTitle);
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  //Atualiza a tarefa selecionada
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});

search.addEventListener("keyup", (e) => {
  //Busca a tarefa
  const searchValue = e.target.value;

  getSearchTodos(searchValue);
});

eraseBtn.addEventListener("click", (e) => {
  //Button de deletar
  e.preventDefault();

  search.value = "";

  search.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
  // Evento de mudar de opção
  const selectValue = e.target.value;

  filterTodo(selectValue);
});

// Local storage
const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todo")) || []; //Retorna um texto, necessario converter para json

  return todos;
};

const loadTodos = () => {
  //Carregar todas as tarefas
  const todos = getTodosLocalStorage();

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0);
  });
};



const saveTodoLocalStorage = (todo) => {
  // Todos os to dos da local storage
  const todos = getTodosLocalStorage();

  // Add o novo todo no Arr
  todos.push(todo);

  // Salvar tudo no ls
  localStorage.setItem("todo", JSON.stringify(todos));
};

const removeTodos = (text) => {
  const todos = getTodosLocalStorage();

  const filteredTodos = todos.filter((todo) => todo.text !== text);

  localStorage.setItem("todo", JSON.stringify(filteredTodos));
};

const updateTodoLocalStorage = (text) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) => (todo.text === text ? (todo.done = !todo.done) : null));

  localStorage.setItem("todo", JSON.stringify(todos));
};

const updateTodoLocal = (textOld, textNew) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) => (todo.text === textOld ? (todo.text = textNew) : null));

  localStorage.setItem("todo", JSON.stringify(todos));
};

loadTodos();
