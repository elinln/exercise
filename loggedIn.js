
window.addEventListener("load", initSite())
document.getElementById("logOutButton", logOut).addEventListener("click", logOut)
document.getElementById("addTodoBtn").addEventListener("click", addTodo) 


function initSite() {
    console.log("Sidan är laddad.")

    const loggedInUser = sessionStorage.getItem("loggedInUser")

    if(!loggedInUser) {
        window.location = "/index.html"
    } 

    printTodos()
    
    document.getElementById("userName").innerText = "Välkommen " + loggedInUser
}

function addTodo() {
    const newTodo = document.getElementById("newTodo").value 

    let todoList = []
    let collectedTodoList = localStorage.getItem("todoList")

    if(collectedTodoList) {
        todoList = JSON.parse(localStorage.getItem("todoList"))
    }

    todoList.push(newTodo)
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

function printTodos() {
    let container = document.getElementById("todoListContainer")
    container.innerHTML = ""

    let todoList = localStorage.getItem("todoList")

    if(!todoList) {
        let notFoundElement = document.createElement("h5")
        notFoundElement.innerText = "Det finns inga todos..."

        container.appendChild(notFoundElement)

        return
    }

    todoList = JSON.parse(todoList)

    for(let i  = 0; i < todoList.length; i++) {
        let todo = todoList [i]

        let listItemElement = document.createElement("h5")
        listItemElement.innerText = todo 

        container.appendChild(listItemElement)
    }

}

function logOut() {
    sessionStorage.removeItem("loggedInUser")
    window.location = "/index.html"
}

