/*
    app functions & properties

    storageAvailable
        1. Set a storage variable
        2. Try to test available storage, attempt to set an item into local storage
        3. Catch any errors pertaining to specific browsers.
        4. Console log the local storage availability.

    openButton [ change to new-form on production ]
        1. Display the form.
        2. Hide the list.

    showButton [ change to show-list on production ]
        1. Display the list.
        2. Initiates the function checkState.
        3. Hide the form.
*/

// function [ storage available ]
function storageAvailable(type) {
    let storage;

    // try / catch validation method
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||

            // test name field aswell, code may not be present 
            
            // everything except Firefox
            e.name === 'QuatoaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&

            // acknowledge QuatoaExceededError only if thers something already stored
            (storage && storage.length !== 0);
    }
}

// test if local storage is avaiable
if (storageAvailable('localStorage')) {

    // test
    console.log('local storage available');

}
else {
    // test
    console.log('no storage available');
}

// select the button [ open ] on the unordered list element
let open = document.querySelector('.open'); // change to new-button on final build

// click event [ open ] : open the form
open.addEventListener('click', ()=> {

    // display the form
    form.style.display = 'flex';
    // hide the list
    list.style.display = 'none';
    // display the show button
    show.style.display = 'block';

});

// select the button [ show ] on the user form element
let show = document.querySelector('.show'); // change to new-form on final build
// apply default button state
show.style.display = 'none';

// click event [ show ] : show the list
show.addEventListener('click', (e)=> {

    // init function [ check state ] : state.js
    checkState();

    // prevent form submit
    e.preventDefault();

    // validate if grid properties are present
    if (list.style.gap === '10px') {

        // display list as grid
        list.style.display = 'grid';

        // test
        console.log('list is displayed as grid');
    }
    else {
        // display list as flex
        list.style.display = 'flex';
    }

    // hide the form
    form.style.display = 'none';
    
    return

});