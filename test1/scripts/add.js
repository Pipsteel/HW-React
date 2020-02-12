let searchIn = document.getElementById("serchIn");
let showAll = document.getElementById("all");
let showDone = document.getElementById("done");
let showActive = document.getElementById("active");
let addIn = document.getElementById("in");
let addBtn = document.getElementById("addBtn");
let info = document.getElementById("info");
let showTodo = document.getElementById("show");
let infoText = '';
let toDo =[];
let done =[];

//-----------------------------------------------

let li = document.createElement('li');
let span = document.createElement('span');
let btns = document.createElement('div');
let trash = document.createElement('button');
let trashIcon = document.createElement("svg");
let main = document.createElement('button');
let mainIcon = document.createElement("svg");

trashIcon.classList.add('far', 'fa-trash-alt');
mainIcon.classList.add('fas', 'fa-crosshairs');
trash.append(trashIcon);
main.append(mainIcon);

span = "wwww";

li = `${span} ${main} `;

showTodo.innerHTML = li;