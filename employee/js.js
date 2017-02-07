/* +++++++++++++++++++++++++++++++ ЗАГРУЗКА СТРАНИЦЫ, СТОК. ИНФОРМАЦИЯ ++++++++++++++++++++++++++++++*/


// наши сотрудники - объекты, 3шт ------------------------------------------------------------------------------------

function Employee(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
}

var eployeeData = [];

function initializeData() {
    eployeeData.push(new Employee(1, "андрей", "иванов", 22));
    eployeeData.push(new Employee(2, "илья", "петров", 25));
    eployeeData.push(new Employee(3, "юлия", "ковалева", 27));
    eployeeData.push(new Employee(4, "иван", "рубис", 29));
}

function showEmployees(employeeList) {
    var listContainer = document.getElementsByClassName('list')[0];
    listContainer.innerHTML = "";
    if (employeeList && employeeList.length > 0) {
        employeeList.forEach(function(element, index, array) {
            var employeeListItem = document.createElement('li');
            employeeListItem.innerText = element.name + ' ' + element.surname + ' ' + element.age;
            var deleteButton = document.createElement('span');
            deleteButton.innerText = '\u00D7';
            deleteButton.onclick = function() {
                deleteEmployee(element.id);
            };
            employeeListItem.appendChild(deleteButton);
            listContainer.appendChild(employeeListItem);
        });
    }
}

function deleteEmployee(employeeId) {
    var index = eployeeData.map(function(element) {
        return element.id;
    }).indexOf(employeeId);
    eployeeData.splice(index, 1);

    showEmployees(eployeeData);
}


/* +++++++++++++++++++++++++++++++++ ДОБАВЛЕНИЕ НОВЫХ СОТРУДНИКОВ ++++++++++++++++++++++++++++++++*/

// удаляем старые li в списке -------------------------------------------------------------------------------------------------

function clearEmployeeList() {
    var uls = document.getElementsByTagName('li');
    for (var i = uls.length - 1; i >= 0; i--) {
        if (uls[i].getElementsByTagName("li").length == 0);
        uls[i].parentNode.removeChild(uls[i]);
    };
};


// добавление сотрудников 3 поля 1 + 1 + 1 -----------------------------------------------------------------------------------

function addNewEmployee() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    for (i = 0; i < eployeeData.length; i++) {
        var identif = (i + 2);
    }

    eployeeData.push(new Employee(identif, lastname, firstname, age));
    clearEmployeeList();
    showEmployees(eployeeData);
};


// обнуляем поля ввода данных --------------------------------------------------------------------------------------------------

function resetform() {
    document.getElementById("myform").reset();
}


/* +++++++++++++++++++++++++++++++++++++ ПОИСК СОТРУДНИКОВ ++++++++++++++++++++++++++++++++++*/

// поиск сотрудников ----------------------------------------------------------------------------------------------------------------

document.querySelector('[data-search]').addEventListener('keyup', filter);

function filter() {
    var term = document.querySelector('[data-search]').value;
    var tag = document.querySelectorAll('[data-searchable] li');
    for (i = 0; i < tag.length; i++) {
        if (tag[i].innerHTML.indexOf(term) !== -1) {
            tag[i].style.display = 'block';
        } else {
            tag[i].style.display = 'none';
        }
    }
}


/* +++++++++++++++++++++++++++++++++++++ СОРТИРОВКА ++++++++++++++++++++++++++++++++++*/

//сортировка по алфавиту, туда и обратно

function sortUnorderedList(ul, sortDescending) {
    if (typeof ul == "string")
        ul = document.getElementById('list');
    var lis = ul.getElementsByTagName("LI");
    var vals = [];
    for (var i = 0, l = lis.length; i < l; i++)
        vals.push(lis[i].innerHTML);
    vals.sort();
    if (sortDescending)
        vals.reverse();
    for (i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
}

initializeData();
showEmployees(eployeeData);




















// поиск по списку сотрудников
/*
document.querySelector('[data-search]').addEventListener('keyup',filter);
function filter(){
  var term = document.querySelector('[data-search]').value;
  var tag = document.querySelectorAll('[data-searchable] li');
  for (i=0;i<tag.length;i++){
    if (tag[i].innerHTML.indexOf(term) !== -1){
      tag[i].style.display = 'block';
  } else {
      tag[i].style.display = 'none';
  }
}
}


// добавление сотрудников 3 поля 1 + 1 + 1

var list = document.getElementById('list');
function addLi() {
   var firstname = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastname').value;
   var birth = document.getElementById('birth').value;
   var entry = document.createElement('li');
   entry.appendChild(document.createTextNode(firstname + " " + lastname + " " + birth));
   list.appendChild(entry);

   // добавляем span закрытия li

   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   entry.appendChild(span);

   // удаляем li в новом списке 

   var close = document.getElementsByClassName("close");
   var i;
   for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
}


// сброс форм ввода данных 

function resetform() {
    document.getElementById("myform").reset();
}


// удаляем li в старом списке 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
}


//сортировочка а-я

function sortingA() {
    function sortUnorderedList(ul, sortDescending) {
        if(typeof ul == "string")
            ul = document.getElementById('list');
    // Получаем ячейки списка в массив
    var lis = ul.getElementsByTagName("LI");
    var vals = [];
    for(var i = 0, l = lis.length; i < l; i++)
        vals.push(lis[i].innerHTML);
    // Сортируем их
    vals.sort();
    // Если в обрятном порядке, то оборачиваем
    if(sortDescending)
        vals.reverse();
    // Меняем содержимое элементов списка
    for(i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
}
sortUnorderedList("list-id"); 
}


//сортировочка я-а

function sortingZ() {
    function sortUnorderedList(ul, sortDescending) {
        if(typeof ul == "string")
            ul = document.getElementById('list');
    // Получаем ячейки списка в массив
    var lis = ul.getElementsByTagName("LI");
    var vals = [];
    for(var i = 0, l = lis.length; i < l; i++)
        vals.push(lis[i].innerHTML);
    // Сортируем их
    vals.sort();
    // Если в обрятном порядке, то оборачиваем
    if(sortDescending)
        vals.reverse();
    // Меняем содержимое элементов списка
    for(i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
}
sortUnorderedList("list-id", true); 
}


// вкл и выкл режим редактирования

function editMode() {
    var change = document.getElementById("myCheck");
    var changeColorCheck = document.getElementById("redactor");
    if (change.checked) {
        document.designMode = 'on';
        document.body.contentEditable = true;
        changeColorCheck.style.backgroundColor = "red";
    } else {
        document.designMode = 'on';
        document.body.contentEditable = false;
        changeColorCheck.style.backgroundColor = "white";
    }
}


*/



//var str = arrEmployeesList.join(";");
//document.write(str);
