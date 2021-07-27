/*
    Modal functions & properties

    initModal
        1. Selects all 'items' elements created via display list function.
        2. Using a forEach loop to cycle through all 'items'.
        3. Attaches the edit modal function to all 'item' elements.
        4. Display the modal as property flex. 
        5. Append the modal to the application wrapper.
        6. Create a exit click event using the 'exit' button

    dataModal
        1. Gets variable values passed to function.
        2. Select current 'items' data
        3. Select the modal data elements
        4. Assign the current items data to the modal data elements.
        5. Set the new data elements as content-editable.
        6. Attach the modal data elements to the modal.
*/

// application component
const app = document.querySelector('.app');

// select the modal element
let modal = document.querySelector('.modal');
// provide default styles to modal
modal.style.display = 'none';


// function [ init modal ] : assign click events
initModal = () => {

    // test route
    console.log('[ displayList ] ==> [ initModal ]');

    // create the current data variables
    let currentTitle;
    let currentDesc;
    let currentCost;

    // select all create list [ items ] li
    let items = document.querySelectorAll('.items');
    // test creation
    console.log('modal items : ' + items.length);

    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            // display modal element as flex
            modal.style.display = 'flex';

            // append the modal to the app wrapper
            app.appendChild(modal);

            // select the exit button
            let exit = document.querySelector('.exit');

            // click event [ exit ] : close modal
            exit.addEventListener('click', ()=> {
                // remove modal from view
                modal.style.display = 'none';
            });

            // set current values to a current + name variable
            currentTitle = element.querySelector('.title').innerHTML;
            currentDesc = element.querySelector('.desc').innerHTML;
            currentCost = element.querySelector('.pay').innerHTML;

            // test
            console.log('current title test: ' + currentTitle);
            
            // init function [ assign data ]
            assignData(currentTitle, currentDesc, currentCost);
        });
    });

};

// function [ assign data ] : assign current data values to data modal
assignData = (currentTitle, currentDesc, currentCost) => {
    
    // test route 
    console.log('[ editModal ] ==> [ dataModal ]');

    // select the modal data elements
    let editTitle = document.querySelector('#editTitle');
    let editText = document.querySelector('#editText');
    let editCost = document.querySelector('#editCost');

    // get the current item elements
    editTitle.innerHTML = currentTitle;
    editText.innerHTML = currentDesc;
    editCost.innerHTML = currentCost;

    // click event [ edit button ] 
    editButton.addEventListener('click', ()=> {

        // test 
        console.log('edit button clicked');

        // init function [ edit list ] : edit.js
        editList(editTitle, editText, editCost);

    });

    

}

