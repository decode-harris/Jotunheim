/*  
    list functions & properties

        1. Removes list from view by default
        2. Sets a counter variable, with a value of 0 ( zero ).
        
    populateStorage
        1. Test application route [ form ] ==> [ function : populate storage ]
        2. Set the current values of the form to local storage.
        3. Once data is processed, initiate the displayList function.

    displayList
        1. Test application route [ storage ] ==> [ function : display list ]
        2. Update the counter value to use for list ID creation & assignment.
        3. Creates a HTML < li > parent element, as well as 3 data elements.
        4. Assign local storage values to data elements ( title, description, payment).
        5. Appends the data element to the li parent. Append li parent to HTML list element.
        6. Resets the current form input element values.
        7. Initiates the checkState function for grid or flex property assignment.
        8. Initiates the editForm function for displaying the editing module element.
*/

// apply default list state
list.style.display = 'none';

// set a counter for list ID's
let counter = 0;

// function [ populate storage ]
function populateStorage() {

    // test route
    console.log('[ validateForm ] ==> [populateStorage ] :  storage has been populated');

    // set an ID counter to local storage
    localStorage.setItem('title', document.querySelector('#company').value);
    localStorage.setItem('description', document.querySelector('#description').value);
    localStorage.setItem('payment', document.querySelector('#payment').value);

    // init function [ display list ]
    displayList();    
}

// function [ display list ]
function displayList() {

    // test route
    console.log('[ populateStorage ] ==> [ displayList ] : list has been displayed');

    // update the counter after each display list function iteration
    counter++;

    // set ID as x + current counter value
    let id = 'x' + counter;
    console.log(id);

    // test local storage has set items values
    console.log(localStorage.getItem('title'));
    console.log(localStorage.getItem('description'));
    console.log(localStorage.getItem('payment'));
    
    // select the list attachment element
    let list = document.querySelector('.list');

    // create a HTML list [ li ] element
    let items = document.createElement('li');
    items.classList = 'items';
    items.style.border = '2px solid #000';
    items.id = id;

    // create list data [ local storage ] elements
    let title = document.createElement('h4');
    let desc = document.createElement('p');
    let pay = document.createElement('p');

    // set class names for list data
    title.classList = 'title';
    desc.classList = 'desc';
    pay.classList = 'pay';

    // set list data values
    title.innerHTML = localStorage.getItem('title');
    desc.innerHTML = localStorage.getItem('description');
    pay.innerHTML = localStorage.getItem('payment');

    // append list data values to items element
    items.appendChild(title);
    items.appendChild(desc);
    items.appendChild(pay);
    
    // append items to un-ordered list element
    list.appendChild(items);
    
    // remove form on validation / display populated lists
    form.style.display = 'none';
    list.style.display = 'flex';

    // select form input elements
    let company = document.querySelector('#company');
    console.log('comp as : ' + company.value); // test user input
    
    let description = document.querySelector('#description');
    console.log('desc as : ' + description.value);// test user input
    
    let payment = document.querySelector('#payment');
    console.log('paym as : ' + payment.value);// test user input

    // reset form values back to default [ empty ]
    company.value = '';
    description.value = '';
    payment.value = '';

   /* 
        checks to see if list has more than the specified items, and assigns the container
        as either grid ( higher value ) or flex ( lower value ).
    */
   checkState(); // file : [ states.js ]

    /*
        attaches an event listener to all 'items' elements, in which
        the setup parameters are applied to the modal.
    */
    initModal(); // file : [ modal.js ]

}