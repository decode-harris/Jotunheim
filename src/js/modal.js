/*
    Modal Functions & Properties

    initModal
        1. Selects all 'items' elements created via display list function.
        2. Using a forEach loop to cycle through all 'items'.
        3. Attaches the edit modal function to all 'item' elements.
        4. Display the modal as property flex. 
        5. Append the modal to the application wrapper.
        6. Gets variable values passed to function.
        7. Select current 'items' data
        8. Select the modal data elements
        9. Assign the current items data to the modal data elements.
        10. Set the new data elements as content-editable.
        11. Attach the modal data elements to the modal.
    
    exitButton
        1. Select the exit button HTML element
        2. Attach an event listener to the button.
        3. Initiate function modal defaults
*/

// application component
const app = document.querySelector('.app');

// select the modal element
let modal = document.querySelector('.modal');

// function [ modal defaults ] : assign default properties to modal on load & when called
modalDefaults = () => {
    // provide default styles to modal
    modal.style.display = 'none';

    // test
    console.log('modal default properties active');
}
modalDefaults();

// function [ init modal ] : assign click events
initModal = () => {

    // test route
    console.log('[ displayList ] ==> [ initModal ]');
    
    // create the current data variables
    let currentTitle;
    let currentDesc;
    let currentCost;
    let currentID;

    // select all create list [ items ] li
    let items = document.querySelectorAll('.items');
    
    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            // test route
            console.log('[ element click event ] ==> [ element modal event ] : modal element is active');
            
            // validate display property of modal element
            if (modal.style.display != 'flex') {
                // display modal element as flex
                modal.style.display = 'flex';
            }
            
            // append the modal to the app wrapper
            app.appendChild(modal);

            // set current ID as clicked element + id
            currentID = element.id;
            
            // set current elements as the clicked items element values
            currentTitle = element.querySelector('.title').innerHTML;
            currentDesc = element.querySelector('.desc').innerHTML;
            currentCost = element.querySelector('.pay').innerHTML;

            // test current values
            console.log('[ modal ] current values : ' + currentTitle); 
            console.log('[ modal ] current values : ' + currentDesc);
            console.log('[ modal ] current values : ' + currentCost);
            
            // select the modal data elements
            let editTitle = document.querySelector('#editTitle');
            let editText = document.querySelector('#editText');
            let editCost = document.querySelector('#editCost');

            // get the current item elements
            editTitle.innerHTML = currentTitle;
            editText.innerHTML = currentDesc;
            editCost.innerHTML = currentCost;

            // init function [ assign data ]
            // assignData(currentID, currentTitle, currentDesc, currentCost);

            // init function [ edit list ] : final production data path
            editList();
        });
    });

};

// select the exit button
let exit = document.querySelector('.exit');

// click event [ exit ] : close modal
exit.addEventListener('click', ()=> {
    // init function [ modal defaults ] 
    modalDefaults();
});