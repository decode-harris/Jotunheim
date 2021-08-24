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

        return
    }
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