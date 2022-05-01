document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  let inputTask = document.querySelector("#new-task-description");
  inputTask.insertAdjacentElement("afterend", createSelectTag());
  inputTask.insertAdjacentElement("afterend", createLabelSelect());
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target["priority"].value);
    buildTaskLister(e.target["new-task-description"].value, e.target["priority"].value);
    form.reset();
  });
});

function buildTaskLister(toDo, priority) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  li.textContent = `${toDo}  `
  li.style.color = `${priority}`;
  li.appendChild(btn);
  // console.log(li);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function createSelectTag() {
  const selectTag = document.createElement("select");
  selectTag.id = "priority";
  selectTag.innerHTML =
  `
  <option value="black">Normal</option>
  <option value="red">High</option>
  <option value="yellow">Medium</option>
  <option value="green">Low</option>
  `
  return selectTag;
}

function createLabelSelect() {
  const labelSelect = document.createElement("label");
  labelSelect.htmlFor = "priority";
  labelSelect.innerHTML = " Priority: ";
  return labelSelect
}
