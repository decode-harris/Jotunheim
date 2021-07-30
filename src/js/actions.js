/*
    Actions Functions & Properties

    editList
        1. Gets editable values passed into the function.
        2. Sets all editable values to content-editable = true.
        3. Focus on the top editable element.
        4. Re-assign edited data to local storage.
        5. 
*/

// select the list action buttons
const delButton = document.querySelector('#delButton');
const saveButton = document.querySelector('#saveButton');

// select all items : !!! not called via this function at the current moment !!!
let items = document.querySelectorAll('.items');

// function [ save list ]
saveList = () => {
    
    // test route
    console.log('[ editList ] ==> [ saveList ]');

    // select the list [ editing ] data values
    let editTitle = document.querySelector('#editTitle');
    let editText = document.querySelector('#editText');
    let editCost = document.querySelector('#editCost');

    // select the list [ comparison ] data values
    let currentTitle = document.querySelector('.title');
    let currentText = document.querySelector('.desc');
    let currentCost = document.querySelector('.pay');
    
    // compare newly editing data with current data values
    if ( editTitle.innerHTML != currentTitle.innerHTML) {
         
        // set the current title as the newly edited title value
        currentTitle.innerHTML = editTitle.innerHTML;
    }
    else if ( editText.innerHTML != currentText.innerHTML) {

        // set the current text [ desc ] as the newly edited text value
        currentText.innerHTML = editText.innerHTML;
    }
    else if ( editCost.innerHTML != currentCost.innerHTML ) {

        // set the current cost as the newly edited cost value
        currentCost.innerHTML = editCost.innerHTML;
    }
    else {  

        // test output
        console.log('output : ' + 
            currentTitle.innerHTML +
            currentText.innerHTML +
            currentCost.innerHTML
        );
    }
}

// function [ delete list ]
deleteList = () => {
    // test route
    console.log('[] ==> []');
}

// click event [ save button ]
saveButton.addEventListener('click', ()=> {
    
    // test event
    console.log('[ save button ] : active');

    // init function [ saveList ]
    saveList();

    // init function [ modal defaults ] : modal.js
    modalDefaults();
});

