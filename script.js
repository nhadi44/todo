let todos = []

var showTodo = document.getElementById("show-todo")

var form = document.getElementById("input-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleAdd()
    renderTodo()
})

function handleAdd(){
    var inputTodo = document.getElementById("input-todo")

    var todo = {
        id: Date.now(),
        desc: inputTodo.value,
        isDone: false,
    }

    todos.push(todo)
    console.log(todos)
    inputTodo.value = ""
    renderTodo();
}

function renderTodo(){
    var todoElements = ""

    for (var todo of todos){
        var id = todo.id
        var desc = todo.desc
        var isDone = todo.isDone

        let btnDone = `<button class="btn-done" onclick="todoDone(${id})">Done</button>`
        let txtsuccess

        if(isDone){
            btnDone = ""
            txtsuccess = "txt-success"
        }

        todoElements += `
        <div class="todo">
        <span class = "todo-name ${txtsuccess}">${desc}</span>
        <div>
        ${btnDone}
        <button class="btn-delete" onclick="todoDelete(${id})">x</button>
        </div>
        </div>
        `
    }
    showTodo.innerHTML = todoElements
}

function todoDelete(id){
    for (var i = 0; i < todos.length; i++){
       console.log(todos[i].id)
       if(id === todos[i].id){
           todos.splice(i,1)
           alert(`You want delete list?`)
       }
    }
    renderTodo()
}

function todoDone(id){
    for (var i = 0; i < todos.length; i++){
       console.log(todos[i].id)
       if(id === todos[i].id){
           todos[i].isDone = true
           alert("Your taks is done")
       }
    }
    renderTodo()
}