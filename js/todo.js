const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#todo_list");
const todoInput = todoForm.querySelector("input");

const todo = [];

const TODOLIST = "TODOLIST";

function saveToDo()
{
    localStorage.setItem(TODOLIST, JSON.stringify(todo));
}

function deleteToDo(event)
{
    const li = event.target.parentElement;
    console.log(li);
    li.remove();
}

function paintToDo(todoValue)
{
    const li = document.createElement("li");
    const span = document.createElement("span"); // 삭제 버튼을 넣어므로 span에 텍스트 추가
    span.innerText = todoValue;

    const button = document.createElement("button");
    button.innerText= "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const todoValue = todoInput.value;
    paintToDo(todoValue);
    todo.push(todoValue);
    saveToDo();
    todoInput.value = "";
}

const savedToDo = localStorage.getItem(TODOLIST);

if(savedToDo == null)
{
    todoForm.addEventListener("submit", handleToDoSubmit);
}
else
{
    paintToDo(savedToDo);
}