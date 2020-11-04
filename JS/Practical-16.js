// Selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todolist = document.querySelector(".todo-list");

//Event Handlers
btn.onclick = create;
todolist.onclick = deletecheck;

//Functions
function create(e) {
  if (todoInput.value != "") {
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    
    todolist.appendChild(newDiv);
    todoInput.value = "";
  } else {
    alert("Input Field Can't Be Blank");
  }
}

function deletecheck(e) {
  var item = e.target;

  if (item.classList[0] === "delete-btn") {
    var parent = item.parentElement;
    parent.remove();
  }

  if (item.classList[0] === "cmplt-btn") {
    var parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}
