$(function() {

    function addNewObjective() {
        var objectiveInput = document.getElementById("new-objective");
        var toDo = document.getElementById("to-do");

        if (objectiveInput.value != "") {
            toDo.innerHTML += "<div id='task'class='card' draggable='true' ondragstart='drag(event)'>" + objectiveInput.value + "<div class='close-icon'><span class='tooltip-text'>close</span></div></div>"
        }
        objectiveInput.value = "";

        function checkObjective() {
            $(".close-icon").click(function() {
                $(this).parent().remove();
            });
        }

        checkObjective();
    }

    // Add text when button is clicked
    $("#new-objective-button").click(() => addNewObjective());

    // Trigger add button when 'Enter' is pressed 
    $("#new-objective").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#new-task-button").click();
        }
    })
})

// Prevents the browser from preventing the drop action
function allowDrop(event) {
    event.preventDefault();
}

// Drag function
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Drop function
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}