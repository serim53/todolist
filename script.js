var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');

var cnt = 1;

button.addEventListener('click', clickButton);

function clickButton(){
    var li = document.createElement('li');
    li.setAttribute("id", "li"+cnt);
    li.setAttribute("class", "list-group-item" );
    li.innerHTML = input.value;
    li.innerHTML += "<button  style='float: right;' class='btn btn-success' type='button' onclick='remove("+cnt+")'>삭제</button>";
    li.innerHTML += "<button  style='float: right;' class='btn btn-success' type='button' onclick='finish("+cnt+")'>완료</button>";
    list.appendChild(li);
    input.value="";
    cnt++;
}


function remove(cnt){
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}

function finish(count) {
    var li = document.getElementById('li'+count);
    li.style.textDecoration = "line-through";
}