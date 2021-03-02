const nameForm = document.getElementById('name-form');
const nameInput = document.querySelector('.name-input');
const greeting = document.querySelector('.greeting');

const User = 'currentUser';

function askForName() {
    nameForm.addEventListener('submit',handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const text = nameInput.value;
    showGreeting(text);
    saveName(text);
}


function showGreeting (text) {
    nameForm.classList.add('not-showing');
    greeting.classList.remove('not-showing');
    greeting.innerText = `Hello! ${text}!`;
}

function saveName(text){
    localStorage.setItem(User,text);
}


function loadName() {
    const currentUser = localStorage.getItem(User);
    if(currentUser === null){
        askForName();
    }
    else{
        showGreeting(currentUser);
    }
}



function init() {
    loadName();
}


init();
