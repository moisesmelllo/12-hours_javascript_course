const todoList = [];

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach(function(todoObject, index) {
       const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index}, 1)
            renderTodoList();
        " class="delete-todo-button">Delete</button> 
        `;
        todoListHtml += html;
    })
    
document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;

}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input')

        const dueDate = dateInputElement.value;
        const name = inputElement.value
        todoList.push({
            name,
            dueDate
        });
        console.log(todoList);


        inputElement.value = '';

        renderTodoList();


}