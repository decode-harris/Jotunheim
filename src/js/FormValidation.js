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
        alert('please enter a project name');

        // focus the error element
        one.focus();

        // return
    }
    else {

        // remove the class [ active-error ] from the form input elements
        // company.removeAttribute('class', 'active-error');
        // description.removeAttribute('class', 'active-error');
        // payment.removeAttribute('class', 'active-error');

        // test route [ click event --> validateForm ]
        console.log('validation success');

        // init function [ populate storage ] : list.js
        populateStorage();
    }

    // // select the name & description for new project
    // let projectName = document.querySelector('#project-name');
    // let projectDescription = document.querySelector('#project-description');

    // // select the project type select option
    // let projectType = document.querySelector('#project-type');

    // // select the project progress percentage value
    // let projectProgress = document.querySelector('#project-progress');

    // // select the boolean checkbox input elements
    // let uploadYes = document.querySelector('#upload-yes');
    // let uploadNo = document.querySelector('#upload-no');

    // if ( projectName.value === '' || projectName.value === null) {
    //     // alert the user to the current error
    //     alert('please enter a project name or title');
    //     // set focus to the error element
    //     projectName.focus();
    //     // set input with class as active error
    //     projectName.setAttribute('class', 'active-error');


    //     return    
    // }
    // else if ( projectDescription.value === '' || projectDescription.value === null) {
    //     // alert the user to the current error
    //     alert('please enter a project description or tagline');
    //     // set focus to the error element
    //     projectDescription.focus();
    //     // set input with class as active error
    //     projectDescription.setAttribute('class', 'active-error');

    //     return    
    // }
    // else if ( projectProgress) {
    //     // form slider elements
    //     let slider = document.querySelector('#project-progress');
    //     let output = document.querySelector('#progress-value');
    //     output.innerHTML = slider.value;

    //     slider.oninput = function() {
    //         output.innerHTML = this.value;


    //     }
    // }

    
    // // select form input elements
    // let company = document.querySelector('#company');
    // console.log('comp as : ' + company.value); // test user input
    
    // let description = document.querySelector('#description');
    // console.log('desc as : ' + description.value);// test user input
    
    // let payment = document.querySelector('#payment');
    // console.log('paym as : ' + payment.value);// test user input

    // // validate if company value is empty
    // if (company.value === '' || company.value === null) {

    //     // alert the user to the current error
    //     alert('please enter the company or business name');
    //     // set focus to the error element
    //     company.focus();
    //     // set input with class as active error
    //     company.setAttribute('class', 'active-error');

    //     return
    // }
    // // validate if description value is empty
    // else if (description.value === '' || description.value === null) {

    //     // alert the user to the current error
    //     alert('please enter the payment description or item of purchase');
    //     // set focus to the error element
    //     description.focus();
    //     // set input with class as active error
    //     description.setAttribute('class', 'active-error');

    //     return
    // }
    // // validate if payment value is empty
    // else if (payment.value === '' || payment.value === null) {

    //     // alert the user to the current error
    //     alert('please enter the payment amount');
    //     // set focus to the error element
    //     payment.focus();
    //     // set input with class as active error
    //     payment.setAttribute('class', 'active-error');

    //     return
    // }
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