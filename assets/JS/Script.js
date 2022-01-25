var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#task-to-do");

var taskFormHandler = function (event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name= 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name= 'task-type']").value;
    
    if(!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form");
        return false;
    }
    formEl.reset();
    
    // package up data as an object
    var taskDatObj  = {
       name: taskNameInput,
       type: taskTypeInput
    }
    // send it as an argument to createTaskEl
    createTaskEL(taskDatObj);
}

var createTaskEL = function(taskDatObj){
       // create list item
       var listItemEl = document.createElement("li");
       listItemEl.className = "task-item";
       // create div to hold task info and add to list item
       var taskInfoEl = document.createElement("div");
       taskInfoEl.className = "task-info";
       // add HTML content to div
       taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskDatObj.name + "</h3><span class= 'task-type'>" + taskDatObj.type + "</span>";
       listItemEl.appendChild(taskInfoEl);
   
       // add entire list item to list
       tasksToDoEl.appendChild(listItemEl);
   
};

formEl.addEventListener("submit", taskFormHandler);

