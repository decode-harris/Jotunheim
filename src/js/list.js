// apply default list state
list.style.display = 'none';

// set a counter for list ID's
let counter = 0;

// function [ populate storage ]
function populateStorage() {

    // set an ID counter to local storage
    localStorage.setItem('title', document.querySelector('#company').value);
    localStorage.setItem('description', document.querySelector('#description').value);
    localStorage.setItem('payment', document.querySelector('#payment').value);

    // init function [ display list ]
    displayList();    

    // test route [ validateForm --> populateStorage ]
    console.log('storage has been populated');
}

// function [ display list ]
function displayList() {

    // update the counter after each display list function iteration
    counter++;

    // set ID as x + current counter value
    let id = 'x' + counter;
    console.log(id);

    // create an overlay element
    let span = document.createElement('span');
    span.classList = 'overlay';

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
    items.appendChild(span);
    // append items to un-ordered list element
    list.appendChild(items);
    
    // remove form on validation / display populated lists
    form.style.display = 'none';
    list.style.display = 'flex';

    /* 
        checks to see if list has more than the specified items, and assigns the container
        as either grid ( higher value ) or flex ( lower value ).

    */
    checkState();
    
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
    
    // test route [ populateStorage --> displayList ]
    console.log('displaying list data elements');

    editingForm();
}