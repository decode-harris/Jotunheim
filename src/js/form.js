/*
    forms functions & properties

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

    
*/

// main form [ form ]
const form = document.querySelector('form');

// select the unordered list [ list ] for appending new items
const list = document.querySelector('.list');

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

    // select form input elements
    let company = document.querySelector('#company');
    console.log('comp as : ' + company.value); // test user input
    
    let description = document.querySelector('#description');
    console.log('desc as : ' + description.value);// test user input
    
    let payment = document.querySelector('#payment');
    console.log('paym as : ' + payment.value);// test user input

    // validate if company value is empty
    if (company.value === '' || company.value === null) {

        // alert the user to the current error
        alert('please enter the company or business name');
        // set focus to the error element
        company.focus();
        // set input with class as active error
        company.setAttribute('class', 'active-error');

        return
    }
    // validate if description value is empty
    else if (description.value === '' || description.value === null) {

        // alert the user to the current error
        alert('please enter the payment description or item of purchase');
        // set focus to the error element
        description.focus();
        // set input with class as active error
        description.setAttribute('class', 'active-error');

        return
    }
    // validate if payment value is empty
    else if (payment.value === '' || payment.value === null) {

        // alert the user to the current error
        alert('please enter the payment amount');
        // set focus to the error element
        payment.focus();
        // set input with class as active error
        payment.setAttribute('class', 'active-error');

        return
    }
    else {
        // init function [ populate storage ] : app.js
        populateStorage();
    }

    // test route [ click event --> validateForm ]
    console.log('validation success');
}