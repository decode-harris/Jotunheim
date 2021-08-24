/*
    Forms Functions & Properties

        1. Selects the form HTML element for submission click event attachment.
        2. Selects the list HTML element for attaching & appending < li > created elements. 

    submitButton 
        1. Prevents default form submission.
        2. Initiates the validateForm function.

    validateForm
        1. Selects the form input elements.
        2. Validates if user has made an entry.
        3. Displays alert & provides helper focus functions to user.
        4. Once input data is validated, initiate the populateStorage function.

    newForm
        1. Click event for newForm button.
        2. Removes current state [ active ]
        3. Clears input value elements in form
        4. Displays form element
        5. Displays correct action buttons
*/

// main form [ form ]
const form = document.querySelector('form');

// function [ display form ] : display the form to the current user
displayForm = () => {

    // assign form element to property display : flex
    form.style.display = 'flex';

    // test route
    console.log('[ loadingScreen ] ==> [ displayForm ] : display the project form to the user');

}

// form button [ btn ]
const submitButton = document.querySelector('#submitButton');

// click event [ button ] : submit form values
submitButton.addEventListener('click', (e)=> {

    // prevent default form submit
    e.preventDefault();

    // init function [ validate form ]
    validateForm();
});

// function [ validate form ]
validateForm = () => {

    // test route 
    console.log('[ submitButton ] ==> [ validateForm ]');

    let one = document.querySelector('#one');

    if (one.value === '') {
        alert('please enter a payment institution.');

        one.focus(); // focus the error element

    }
    else if (two.value === '') {
        alert('Please enter a payment description.');

        two.focus(); // focus the error element
    
    }
    else if (three.value === '') {
        alert('Please enter a payment cost.');

        three.focus(); // focus the error element

    }
    else {

        uploadingScreen(); // file : [ CalculateData.js ]

        // test route [ click event --> validateForm ]
        console.log('validation success');

        // init function [ populate storage ] : list.js
        populateStorage();
    }

}

// select [ newForm ] button
let newForm = document.querySelector('#newForm');

// click event [ new list button ] : open a new form
newForm.addEventListener('click', ()=> {
    
    form.style.display = 'flex'; // display the form
    form.querySelector('#one').value = ''; // set the new form input element to empty
    form.querySelector('#one').focus(); // focus the first input element on the new form
    list.style.display = 'none'; // remove [ list ] element
    viewList.style.display = 'block'; // display [ viewList ] button

});