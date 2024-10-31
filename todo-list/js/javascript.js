// Elementos
const taskinput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const formAdd = document.querySelector(".form-add");
const formEdit = document.querySelector(".form-edit");
const formEditInput = document.querySelector("#edit-input");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector(".form-search");
const cancelBtn = document.querySelector("#cancel-btn");

let oldEditValue;

// Funções
const createElement = (element, style, icon) => {
  const elementCreat = document.createElement(element);
  elementCreat.classList.add(style);
  elementCreat.innerHTML = icon;

  return elementCreat;
};

const createTask = (taskinputValue) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const titleTask = document.createElement("h3");
  titleTask.innerText = taskinputValue;
  taskDiv.appendChild(titleTask);

  const buttonFinish = createElement(
    "button",
    "finish",
    '<i class="fa-solid fa-check finish">'
  );
  taskDiv.appendChild(buttonFinish);

  const buttonEdit = createElement(
    "button",
    "edit",
    '<i class="fa-solid fa-pen edit"></i>'
  );
  taskDiv.appendChild(buttonEdit);

  const buttonRemove = createElement(
    "button",
    "remove",
    '<i class="fa-solid fa-xmark remove"></i>'
  );
  taskDiv.appendChild(buttonRemove);

  taskList.appendChild(taskDiv);

  taskinput.value = "";
  taskinput.focus();
};

const toggleEdite = () => {
  formAdd.classList.toggle("hide");
  formEdit.classList.toggle("hide");
  taskList.classList.toggle("hide");
};

const updateTask = (editInputValue) => {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    let taskValue = task.querySelector("h3");

    if (taskValue.innerText === oldEditValue) {
      console.log(taskValue.value);
      taskValue.innerText = editInputValue;
    }
  });
};

const getSearchTask = (searchValue) => {
  const task = document.querySelectorAll(".task");

  task.forEach((title) => {
    let titleTask = title.querySelector("h3").innerText.toLowerCase();

    console.log(searchValue);

    const searchValeuNormalized = searchValue.toLowerCase();

    title.style.display = "flex";

    if (!titleTask.includes(searchValeuNormalized)) {
      title.style.display = "none";
    }
  });
};

// Eventos
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskinputValue = taskinput.value;

  if (taskinputValue) {
    createTask(taskinputValue);
  }
});

document.addEventListener("click", (e) => {
  const taskAction = e.target;
  const parentEl = taskAction.closest("div");
  let taskTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    taskTitle = parentEl.querySelector("h3").innerText;
  }

  if (taskAction.classList.contains("finish")) {
    parentEl.classList.toggle("task-finish");
  }

  if (taskAction.classList.contains("edit")) {
    toggleEdite();
    formEditInput.value = taskTitle;
    oldEditValue = taskTitle;
  }

  if (taskAction.classList.contains("remove")) {
    parentEl.remove();
  }
});

formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = formEditInput.value;

  if (editInputValue) {
    updateTask(editInputValue);
  }

  toggleEdite();
});

searchInput.addEventListener("keyup", (e) => {
  const searchInputValue = e.target.value;

  getSearchTask(searchInputValue);
});

searchBtn.addEventListener("click", (e) => {
  searchBox.classList.toggle("hide");
  formAdd.classList.toggle("hide");
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchBox.classList.toggle("hide");
  formAdd.classList.toggle("hide");

  searchInput.dispatchEvent(new Event("keyup"));
});
