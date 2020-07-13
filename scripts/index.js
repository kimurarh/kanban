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