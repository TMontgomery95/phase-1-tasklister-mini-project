document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.taskDescription.value);
    form.reset();
  });
});

// Creates tasks and handles deletions
function buildToDo(todo){
  let li = document.createElement('li');
  li.textContent = `${todo}`
  document.querySelector('#tasks').appendChild(li);
}
