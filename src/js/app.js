/*
    Application Functions & Properties

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

// declare the application view states
const home = document.querySelector('#home');
const load = document.querySelector('#load');

// function [ applicationDefaults ] : remove all states from application view
applicationDefaults = () => {
    // test route
    console.log('[ applicationDefaults ] : remove all states from application view');

    // apply the [ default property ] value to all application states
    home.style.display = 'none';
    load.style.display = 'none';
    form.style.display = 'none';
    list.style.display = 'none';
};

// function [ homepageScreen ] : reactive display the homepage state view 
homepageScreen = () => {
    // test route
    console.log('[ developerControls ] ==> [ homepageScreen ] : display homepage view state to current user');

    // assign the homepage view to display : flex
    home.style.display = 'flex';
};

// function [ loadingScreen ] : display the loading screen element between click events
loadingScreen = () => {

    // test route
    console.log('[ startButton ] ==> [ loadingScreen ]');

    load.style.display = 'flex';

    // delay init function [ displayForm ] by 2 seconds
    setTimeout(() => {

        // init function [ applicationDefaults ] : clear application state view
        applicationDefaults();

        // init function [ displayForm ] : data flow [ loadingScreen ] ==> [ displayForm ]
        displayForm();

    }, 2000);
}

// button selector [ start button ]
let startButton = document.querySelector('#startButton');

// click event [ start button ]
startButton.addEventListener('click', ()=> {

    // test
    console.log('start button clicked');

    // init function [ applicationDefaults ] : clear application state view
    applicationDefaults();

    // init function [ loadingScreen]
    loadingScreen();
});

/*
    developer controls

    call on-load to run specific functions or view states

    create singular application states for testing

    can add or remove certain functions with ease

    makes for an easier way to debug function error or 

    invalid data processing.

*/
developerControls = () => {

    // init functions
    applicationDefaults();
    homepageScreen();
    
}

// init function [ developerControls ]
developerControls();



/*
    new form button & show list button

    refactor this click events as well as providing button

    states within the application. Add the buttons inside 

    a button container & display during certain stages

    of the application.

*/

// function [ buttonControls ]
buttonControls = () => {

    // test function
    console.log('[ buttonControls ] : active');

    // select the buttons global container
    let buttons = document.querySelector('#list .buttons');
    console.log(buttons);

    // validate if [ form ] is active
    if (form.style.display === 'flex') {

        // test validation
        console.log('[ buttonControls ] : form = flex');

        return
    }
    else if (list.style.display === 'flex') {

        // test validation
        console.log('[ buttonControls ] : list = flex');

        // set actions buttons container
        // actionButtons.style.display = 'flex';
        // operationButtons.style.display = 'none';

        // buttons.appendChild(actionButtons);


        return
    }
    // else if (active.style.display === 'flex') {

    //     // set operation buttons container

    //     return
    // }
    else {

        console.log('[ buttonControls ] : validated');
    }

};

// select the button containers
let action = document.querySelector('#actionButtons');
let operation = document.querySelector('#operationButtons');

buttonDefaults = () => {
    
    // init function [ buttonControls ]
    buttonControls();

};

// init function [ buttonDefaults ]
buttonDefaults();

// function [ actionButtons ] : display actions container, remove operations container
actionButtons = () => {
    console.log('[ actionButtons ] : active'); // test function properties
    action.style.display = 'flex';
    operation.style.display = 'none';
}
// function [ operationButtons ] : display operations container, remove actions container
operationButtons = () => {
    console.log('[ operationButtons ] : active'); // test function properties
    action.style.display = 'none';
    operation.style.display = 'flex';
}

// click event [ new list button ] : open a new form
newButton.addEventListener('click', ()=> {
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

    // prevent form submit
    e.preventDefault();

    let items = list.querySelectorAll('.items');

    // validate list items length
    if (items.length === 0) {

        // user alert [ change to inner html helper element on production ]
        alert('no created notes in storage');

        displayForm();
    }
    else {
        // init function [ check state ] : state.js
        checkState();

        

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
    }

});