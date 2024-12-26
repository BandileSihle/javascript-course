/* steps
  1. Create array to store todos
  2. When we click "Add",
  3. Get text from textbox
  4. Add it to array
  5.
*/


const todoList = [{
  name :'wash dishes',
  dueDate: '2024-11-20'
}, {
  name: 'make dinner',
  dueDate: '2024-11-20'
 }]; // default values

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const {name, dueDate} = todoObject; // Destructuring, same variable name and object name

  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();

    " class="delete-todo-button">Delete</button>
    
  `;

  // use accumulator pattern to combine the html

  todoListHTML += html;
  }


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;
 
 todoList.push({
  //name: name,
  //dueDate: dueDate
  name, // shorthand property
  dueDate // shorthand property
 });



 inputElement.value = '';

 renderTodoList();
}
