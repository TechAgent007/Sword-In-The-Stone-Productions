//start Menu
function openNav() {document.getElementById("Navigation").style.height = "100%"; }
function closeNav() {document.getElementById("Navigation").style.height = "0%"; }
//end Menu

//start Drag & Drop
function allowDrop(ev) {  ev.preventDefault();}
function drag(ev) {  ev.dataTransfer.setData("text", ev.target.id);}
function drop(ev) {  ev.preventDefault();  var data = ev.dataTransfer.getData("text");  ev.target.appendChild(document.getElementById(data));}
function onDragStart(event) {  event    .dataTransfer    .setData('text/plain', event.target.id);	event    .currentTarget    .style    .backgroundColor = 'yellow';}
function onDragOver(event) {  event.preventDefault();}
function onDrop(event) {  const id = event    .dataTransfer    .getData('text');  const draggableElement = document.getElementById(id);  const dropzone = event.target;  dropzone.appendChild(draggableElement);  event    .dataTransfer    .clearData(); }
//end Drag & Drop