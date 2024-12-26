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

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject; // Destructuring, same variable name and object name

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    
  `;

  // use accumulator pattern to combine the html

  todoListHTML += html;
  });


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        // index is a closure here.
        todoList.splice(index, 1);
        renderTodoList();
      });

     
    });

    // All gives us all delete buttons with the class.

}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });



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
