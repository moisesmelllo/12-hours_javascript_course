const todoList = [{
    name: 'sleep',
    dueDate: 'now',
}];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        /*
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        */
       const {name, dueDate} = todoObject;
       const index = i
        const html = `
        <p>
            ${name} ${dueDate} 
            <button onclick="
                todoList.splice(${index}, 1)
                renderTodoList();
            ">Delete</button> 
        </p>
        `;
        todoListHtml += html;
}

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