// application component
const app = document.querySelector('.app');

// select the modal element
let modal = document.querySelector('.modal');
// provide default styles to modal
modal.style.display = 'none';



// function [ modal event ] : display a modal
modalEvent = () => {

    // select all create list [ items ] li
    let items = document.querySelectorAll('.items');
    // test creation
    console.log('modal items : ' + items.length);

    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            // display the modal for user on click
            modal.style.display = 'flex';

            // set modal elements
            h2.innerHTML = element.querySelector('.company').innerHTML;
            text.innerHTML = element.querySelector('.description').innerHTML;
            cost.innerHTML = '$ ' + element.querySelector('.payment').innerHTML;

            // select the exit button
            let exit = document.querySelector('.exit');
            
            // click event [ exit ] : close modal
            exit.addEventListener('click', ()=> {
                // remove modal from view
                modal.style.display = 'none';
            });

            // test
            console.log('open items modal');

        });
    });

}



