'use strcit';

window.addEventListener('DOMContentLoaded', () => {
    
    // Variables 

    const list = document.querySelector('ul'),
          form = document.querySelector('form'),
          input = document.querySelector('input');
          
    let tasks = ['First item'];
    
    // Functions definitions

    function renderList(){

        // Clear list
        list.innerHTML = '';

        // Add things to list 
        tasks.forEach( (item) => {
            list.innerHTML += `
            <li>
                <input type="checkbox"> 
                ${item}
                <div class="delete">delete</div>
            </li>
            `;
        } );
    }

    // Handle form submitting new task
    function addTask(){

        if(+input.value !== 0){
            tasks.push(input.value);
            form.reset();   
        }  
        renderList();
    };

    // Add event listeners

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    // Run functions

    renderList();

});