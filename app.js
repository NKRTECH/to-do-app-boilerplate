var listOfActivities = []
var input = document.getElementById('input');

var todolist = document.getElementById('todolist');


var btn=document.getElementById('button')
btn.onclick = click;


function click() {

    listOfActivities.push(input.value);
    console.log(listOfActivities)

    input.value = '';

    showlist();
}

function showlist() {



    todolist.innerHTML = '';


    listOfActivities.forEach(function(n , i){
        todolist.innerHTML +=
        '<li>' + 
        n + 
        "<a onclick='editItem(" + 
        i + 
        ")'>EDIT</a>" + 
        "<a onclick='deleteItem(" + 
        i +
        ")'>&times | </a> </li>";
    });
}

function deleteItem(i) {
    listOfActivities.splice(i , 1)
    showlist()
}



function editItem(i) {

    var newValue = prompt('Please insert your new value');

    listOfActivities.splice(i , 1, newValue);

    showlist()
}

