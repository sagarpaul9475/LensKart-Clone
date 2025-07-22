let To_do = JSON.parse(localStorage.getItem('todos')) || [{}];

let input = document.querySelector('.type-text');
let add = document.querySelector('.btn1');
let cont = document.querySelector('.container');
let date=document.querySelector('.js-due-date-input');

function displayTodos() {
    let html = '';
    To_do.forEach((toObject,index) => {
        const {Duedate,todo}=toObject;
        html += `<div class="center"> 
        <li style="list-style: none;">${todo}</li>
        <p>${Duedate}</p>
        <button onclick="deleteTodo(${index})">Delete</button>
        </div>
        <br>
        `
    });
    cont.innerHTML = html;
}

displayTodos();

add.addEventListener('click', () => {
    const todo = input.value.trim();
    const Duedate = date.value;
    if (todo) {
        To_do.push({todo,Duedate});
        localStorage.setItem('todos', JSON.stringify(To_do)); 
        displayTodos(); 
        input.value = '';
        date.value = '';
    } else {
        alert('Please enter a value');
    }
});

function deleteTodo(index) {
    To_do.splice(index, 1); 
    localStorage.setItem('todos', JSON.stringify(To_do));
    displayTodos(); 
}
