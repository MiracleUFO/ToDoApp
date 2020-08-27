const add = document.getElementById('add');
const commit = document.getElementById('commit');
const formToDo = document.getElementById('formToDo');
const inputToDo = document.getElementById('inputToDo');
const ul = document.getElementById('ul');
const dateForm = document.getElementById('formDate');
const dateField = document.getElementById('inputDate');
const dateBtn = document.getElementById('setDate');


//Adds date
const displayDateField = () => {
  dateForm.style.display = 'inline';
  dateBtn.style.display = 'none';
 }

const setDate = (e) => {
document.getElementById('date').textContent = '';
  date = dateField.value;
  document.getElementById('date').innerHTML = date;
  dateField.value = '';
  dateForm.style.display = 'none';
  dateBtn.style.display = 'inline';
}
 
//Displays form field and commit icon on clicking plus icon
const displayToDoField = (ev) => {   
	ev.target.style.display = "none";
	formToDo.style.display = "inline";
	commit.style.display = "inline";
}

//	Function to add new to-do to list
function commitToDo() {
let newToDo = inputToDo.value;
	const li = document.createElement('li'); 
	    li.innerHTML = '<div class="inline">'+newToDo+'</div>'+'<div class="iconsBox"><span title="Delete" class="del" onclick="delToDo(event)">&#x2718</span><span title="Edit" class="edit" onclick="editFunc(event)">&#x270E</span><span title="Check as done" class="check" onclick="checkFunc(event)">&#x2714</span></div>';
	    ul.appendChild(li);
	    ul.style.display='block';
	    formToDo.style.display = "none";
	    commit.style.display='none';
	    add.style.display = "block";
	    inputToDo.value = '';
      if (ul.hasChildNodes()) {
        document.getElementById('clearToDo').style.display = 'block';
      }
}

//Adds new to-do to list on click commit icon
const addToDoCommit = (ev) => {
  commitToDo();
}

//Adds new to-do to list on ENTER
const addToDoEnter = (ev) => {     
	if (ev.keyCode === 13) {
		ev.preventDefault();
		if (inputToDo.value != '') {
		 commitToDo();
	     }
    }
}  

//To delete current to-do
function delToDo(e) {
  e.target.parentElement.parentElement.remove()
}

//To strike out current to-do on check
function checkFunc(e) {
  e.target.parentElement.parentElement.firstChild.classList.toggle('strikethrough')
}

//To edit current to-do
function editFunc(e) {
  e.target.parentElement.parentElement.style.display = 'none';
  add.style.display = 'none';
  formToDo.style.display = 'inline';
  inputToDo.value = e.target.parentElement.parentElement.firstChild.firstChild.nodeValue;
}

//To clear all on list
const clearAll = (e) => {
  ul.innerHTML = '';
  document.getElementById('clearToDo').style.display = 'none';
  e.stopPropagation();  
}

add.onclick = displayToDoField;
inputToDo.onkeyup = addToDoEnter;
commit.onclick = addToDoCommit;
dateBtn.onclick = displayDateField;
dateField.oninput = setDate;
