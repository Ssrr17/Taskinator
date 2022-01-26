var taskIdCounter = 0;
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
        // add task id as a custom attribute
       listItemEl.setAttribute("date-task-id",taskIdCounter)
       // create div to hold task info and add to list item
       var taskInfoEl = document.createElement("div");
       taskInfoEl.className = "task-info";
       // add HTML content to div
       taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskDatObj.name + "</h3><span class= 'task-type'>" + taskDatObj.type + "</span>";
       listItemEl.appendChild(taskInfoEl); 

       var taskActionsEl = createTaskActions(taskIdCounter);
        listItemEl.appendChild(taskActionsEl);
       // add entire list item to list
       tasksToDoEl.appendChild(listItemEl);
    //increment counter
       taskIdCounter++;
   
};

var  createTaskActions = function(taskId){
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className =  "btn edit-btn"
    editButtonEl.setAttribute("data-task-id",taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delete bnutton
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn"
    deleteButtonEl.setAttribute("data-task-id",taskId)

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "seleect-status";
    statusSelectEl.setAttribute("name","status-change");
    statusSelectEl.setAttribute("data-task-id" , taskId)

    var statusChoices = ["To Do", "In Progress", "Completed" ];

    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
  var statusOptionEl = document.createElement("option");
  statusOptionEl.textContent = statusChoices[i];
  statusOptionEl.setAttribute("value", statusChoices[i]);

  // append to select
  statusSelectEl.appendChild(statusOptionEl);
}

    actionContainerEl.appendChild(statusSelectEl);

    return actionContainerEl;

}

formEl.addEventListener("submit", taskFormHandler);

