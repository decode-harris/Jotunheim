/*  
    List Functions & Properties

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

    activeList
        1. Set the current clicked list element as className active.
        2. Transition height and/or width attributes on load.
        3. Enable list element data to be content editable.
        4. De-activate 'active' list via save or delete click events.

    saveList
        1. Update the local storage with new data values.
        2. Assign edited data vales as the new data values.
        3. Remove the active list element className.

    deleteList
        1. Remove current values from local storage.
        2. Remove the list values and/or list element from view.
        3. Remove the active list element className.
*/

// select the unordered list [ list ] for appending new items
const list = document.querySelector('.list');

// set ID as x + current counter value
let id;

// apply default list state
list.style.display = 'none';

// set a counter for list ID's
let counter = 0;

// select the save button
const saveButton = document.querySelector('#saveButton');

// function [ listDefaults ] : 
listDefaults = (id) => {

    // select all [ list ] item elements
    let items = document.querySelectorAll('.items');

    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            // test
            console.log('element clicked');

        });
    });
}

// function [ populate storage ]
populateStorage = () => {

    // test route
    console.log('[ validateForm ] ==> [ populateStorage ] :  storage has been populated');

    // set validated items to local storage
    localStorage.setItem('title', document.querySelector('#company').value);
    localStorage.setItem('description', document.querySelector('#description').value);
    localStorage.setItem('payment', document.querySelector('#payment').value);

    // init function [ listCreate ]
    listCreate();
}

// function [ listCreate ] : create a new list component
listCreate = () => {

    // test route
    console.log('[ populateStorage ] ==> [ listCreate ] : create a new list component');

    // update the counter after each display list function iteration
    counter++;

    // assign id as [ x + counter value ]
    id = 'x' + counter;

    // select the list attachment element
    let list = document.querySelector('.list');

    // create a list items [ li ] element
    let items = document.createElement('li');
    items.id = id;
    items.classList = 'items';

    // create list data [ local storage ] elements
    let title = document.createElement('span');
    let desc = document.createElement('span');
    let cost = document.createElement('span');

    // set class names for list data
    title.classList = 'title';
    desc.classList = 'desc';
    cost.classList = 'cost';

    // set list data values
    title.innerHTML = localStorage.getItem('title');
    desc.innerHTML = localStorage.getItem('description');
    cost.innerHTML = localStorage.getItem('payment');

    // append list data values to items element
    items.appendChild(title);
    items.appendChild(desc);
    items.appendChild(cost);
    
    // append items to un-ordered list element
    list.appendChild(items);

    // init function [ displayList ]
    displayList(title);
}

// function [ displayList ] : display the list component
displayList = (title) => {

    // test route
    console.log('[ populateStorage ] ==> [ displayList ] : displaying the list component');

    // init function [ applicationDefaults ] : file // app.js
    applicationDefaults();

    // display the list element
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
        attaches an event listener to all 'items' elements, which provides reactive element
        parameters & properties.
    */
    activeList(id, title);

}
// function [ active list ] : apply the list 'active' properties class
activeList = (id, title) => {
    // test route
    console.log('[ displayList ] ==> [ activeList ] : assigned active list properties');

    // select the button container elements
    let operations = document.querySelector('#operations');
    let actions = document.querySelector('#actions');

    // select all [ items ] span elements
    let span = document.querySelectorAll('.items span');

    // forEach [ span ]
    span.forEach(element => {
        // click event [ span ]
        element.addEventListener('click', ()=> {
            // reset data elements back to [ content editable ] = false
            element.setAttribute('contenteditable', 'true');
        });
    });
    // test
    console.log(span);

    // select all list [ items ] elements
    let items = document.querySelectorAll('.items');

    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            // validate if element is 'isActive'
            if (element.id != 'isActive') {
                // assign element id as 'isActive'
                element.id = 'isActive';

                // set current title as content editable
                title.setAttribute('contenteditable', 'true');
                // focus the current title element
                title.focus();

                // remove the action buttons from view
                actions.style.display = 'none';

                // apply the style property visibility : visible to operations element
                operations.style.visibility = 'visible';

                // append the button container to the active element
                element.appendChild(operations);
            }
        });

        // click event [ save button ]
        saveButton.addEventListener('click', ()=> {

            // validate element id
            if (element.id != id) {
                // set element id as passed-in id
                element.id = id;
                // test event
                console.log('[ save button ] : element ID = ' + element.id);
            }

            // reset title attribute [ content editable ] to false
            title.setAttribute('contenteditable', 'fasle');
            
            // set timeout of 500ms to initiate function [ saveList ]
            setTimeout(() => {
                // init function [ saveList ]
                saveList(id);
            }, 500);
        
        });
    });
};

// function [ save list ] : reset active elements & append edited data values to page
saveList = (id) => {
    // test route
    console.log('[ activeList ] ==> [ saveList ] : save updated or edited values');

    // select all list [ items ]
    let items = document.querySelectorAll('.items');

    // forEach [ items ]
    items.forEach(element => {

        // reset element id back to default
        element.id = id;
    });

    // select all [ items ] span elements
    let span = document.querySelectorAll('.items span');
    
    // forEach [ span ]
    span.forEach(element => {

        // set span element as content editable
        element.setAttribute('contenteditable', 'false');

        // test
        console.log('[ save list ] : span click event = content editable');
    });
};

/*  
    ========== [ WORK-IN-PROGRESS ] ==========
    delete button 
    remove the current active element from the page
    ========== [ WORK-IN-PROGRESS ] ==========
*/

// select the delete button
const delButton = document.querySelector('#delButton');

// function [ delete list ]
deleteList = () => {
    // test route
    console.log('[ activeList ] ==> [ saveList ]');
}