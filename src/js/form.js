// main form [ form ]
const form = document.querySelector('form');
// test form
console.log(form);

// select the unordered list [ list ] for appending new items
const list = document.querySelector('.list');

// form button [ btn ]
const button = document.querySelector('.btn');
// test button
console.log(button);

// click event [ button ] : submit form values
button.addEventListener('click', (e)=> {

    // init function [ newPayment + event ]
    newPayment(e);
})

// function [ newPayment + event ] : validate application form
newPayment = (e) => {

    // event : prevent default form submit
    e.preventDefault();

    // test the route via altering submit button styles
    button.style.background = '#000';
    button.style.color = '#FFF';

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
    // submit the form & create a new list item
    else {
        // select pre-set list sub elements
        let itemsCompany = document.querySelector('.items .company');
        let itemsDescription = document.querySelector('.items .description');
        let itemsPayment = document.querySelector('.items .payment');

        // validate if first items title [ company ] is not empty
        if (itemsCompany.innerHTML != '') {

            // create a HTML list [ li ] element
            let newItems = document.createElement('li');
            newItems.classList = 'items';
            
            // create a new title [ company ] element
            let newItemsCompany = document.createElement('span');
            newItemsCompany.classList = 'company';
            newItemsCompany.innerHTML = company.value;
            newItems.appendChild(newItemsCompany);
            
            // create a new text [ description ] element
            let newItemsDescription = document.createElement('span');
            newItemsDescription.classList = 'description';
            newItemsDescription.innerHTML = description.value;
            newItems.appendChild(newItemsDescription);

            // create a new number / text [ payment ] element
            let newItemsPayment = document.createElement('span');
            newItemsPayment.classList = 'payment';
            newItemsPayment.innerHTML = '$ ' + payment.value;
            newItems.appendChild(newItemsPayment);

            // append all 'new' elements to HTML list [ li ] element
            list.appendChild(newItems);
        }
        else {
            // set the pre-set list sub elements to current values
            itemsCompany.innerHTML = company.value;
            itemsDescription.innerHTML = description.value;
            itemsPayment.innerHTML = '$ ' + payment.value;
        }

        // init function [ modalEvent ] : modal.js
        modalEvent();

        // test end route
        console.log('validation success');
    }

    // reset form values
    company.value = '';
    description.value = '';
    payment.value = '';

    // revert the button styles to default
    button.style.background = '#FFF';
    button.style.color = '#000';

    // init function [ check state ] : states.js
    checkState();
}