function loadTodos(){
    fetch ('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    const divContainer = document.getElementById('todo-container')
    for( const todo of todos){
        const todoDiv  = document.createElement('div')
        todoDiv.innerHTML=`
        <h1>Title: ${todo.title} </h1>
        <p>User Id: ${todo.userId}</p>
        <p>Task status : ${todo.completed === true ? 'complete': 'not complete'} </p>
        `;
        divContainer.appendChild(todoDiv);
        console.log(todo);
    }
}
loadTodos();