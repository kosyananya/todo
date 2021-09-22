let toDoArr = ['aaaaaaa', 'bbbbbbb', 'ccccc']
let toDoArrLength = toDoArr.length
let toDoItem = document.getElementsByClassName('todo-list_item')
let toDoListWrapper = document.getElementsByClassName('todo-list_item')
if(toDoArr.length) {
    let toDoList = document.createElement('ul')
    toDoList.classList.add("todo-list")
    document.getElementsByClassName('todo-list_block')[0].appendChild(toDoList)
    for(let i = 0; i < toDoArr.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = toDoArr[i]
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = "x"
        deleteBtn.classList.add('delete-todo_btn')
        deleteBtn.setAttribute('data-id',i)
        li.appendChild(deleteBtn)
        toDoList.appendChild(li)
    }
}
function addToDoItem() {
    if(document.getElementsByClassName('todo-input')[0].value) {
        let val = document.getElementsByClassName('todo-input')[0].value
        toDoArr.push(val)
        let toDoList = null
        
        if(!document.getElementsByClassName('todo-list_block')[0].getElementsByClassName('todo-list')) {
             toDoList = document.createElement('ul')
            toDoList.classList.add("todo-list")
            document.getElementsByClassName('todo-list_block')[0].appendChild(toDoList)
            
        }else {
            toDoList = document.getElementsByClassName('todo-list')[0]
        }
        let li = document.createElement('li')
        li.innerHTML = val
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = "x"
        deleteBtn.classList.add('delete-todo_btn')
        deleteBtn.setAttribute('data-id',toDoArrLength)
        li.appendChild(deleteBtn)
        toDoList.appendChild(li)
    }

    document.getElementsByClassName('todo-input')[0].value = ""
}

let btn = document.getElementsByClassName('add-todo_btn')[0]
btn.addEventListener("click", addToDoItem)
document.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
     addToDoItem()
    }
  });
let deleteBtn = document.getElementsByClassName('delete-todo_btn')

document.addEventListener('click', function(e) {
    if(e.target.className === 'delete-todo_btn') {
        e.target.parentElement.remove()
        let id = e.target.getAttribute('data-id')
        toDoArr.splice(id,1)
        console.log(id,toDoArr)
    }
   
})
