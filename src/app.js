'use strcit'; 

window.addEventListener('DOMContentLoaded', () => {
    
    // Variables 

    const list = document.querySelector('ul'),
          form = document.querySelector('form'),
          input = document.querySelector('input');
          
    let tasks = ['Add another thing to do'];
    
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

        // Assign event listeners to delete buttons

        const listItems = document.querySelectorAll('li');

        listItems.forEach( (item, i) => {
            item.addEventListener('click', e => {
                if(e.target.classList.contains('delete')){
                    tasks.splice(i,1);
                    renderList();
                }
            });
        });

        if(tasks.length <= 0 ) {
            list.innerHTML = '<p>You have no tasks &#x1F9D0;</p>';
        }

    }

    // Handle form submitting new task
    function addTask(){

        if(+input.value !== 0){
            tasks.push(input.value);
            form.reset();   
        }   
        renderList();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    // Start

    renderList();

});