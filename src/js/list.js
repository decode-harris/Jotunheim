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

    delete list
        1. select all item elements in current list view
        2. validates if items length is equal to zero
        3. Reset counter ( id ) if length is 0
        4. Reassign counter ( id ) if length is not 0
        5. Remove the active element [ deletion ]
        6. Reset app to form state if length is 0
        7. Apply form buttons to button state container

*/

// select the unordered list [ list ] for appending new items
const list = document.querySelector('.list');

// set ID as x + current counter value
let id;

// apply default list state
list.style.display = 'none';

// set a counter for list ID's
let counter = 0;

// function [ populate storage ]
populateStorage = () => {

    // test route
    console.log('[ validateForm ] ==> [ populateStorage ] :  storage has been populated');

    // set validate items to local storage
    localStorage.setItem('projectTitle', document.querySelector('#one').value);

    // init function [ listCreate ]
    listCreate();
}

// function [ listCreate ] : create a new list component
listCreate = () => {

    // test route
    console.log('[ populateStorage ] ==> [ listCreate ] : create a new list component');

    // init function [ buttonDefaults ]
    buttonDefaults();

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
    let one = document.createElement('span');
    let two = document.createElement('span');
    let three = document.createElement('span');

    // set list data values
    one.innerHTML = localStorage.getItem('projectTitle');

    // set class names for list data
    one.classList = 'projectTitle';
    
    // append list data values to items element
    items.appendChild(one);
    items.appendChild(two);
    items.appendChild(three);
    
    // append items to un-ordered list element
    list.appendChild(items);

    // init function [ displayList ]
    displayList(one);
}

// function [ displayList ] : display the list component
displayList = (one) => {

    // test route
    console.log('[ populateStorage ] ==> [ displayList ] : displaying the list component');

    // init function [ applicationDefaults ] : file // app.js
    applicationDefaults();

    // init function [ actionButtons ] : file // app.js
    actionButtons();

    // display the list element
    list.style.display = 'flex';
    
    // reset form input elements
    one.value = '';

    // init function [ listEvents ]
    listEvents();

    /* 
        checks to see if list has more than the specified items, and assigns the container
        as either grid ( higher value ) or flex ( lower value ).
    */
   checkState(); // file : [ states.js ]

    /*
        attaches an event listener to all 'items' elements, which provides reactive element
        parameters & properties.
    */
    activeList(id);

}

// function [ listEvents ]
listEvents = () => {

    // test route
    console.log('[ displayList ] ==> [ listEvents ] : add an active class to items element');
    
    // select the list element
    // var header = document.getElementById("list");
    var items = list.getElementsByClassName("items");

    // for loop [ items ]
    for (let i = 0; i < items.length; i++) {

        // click event [ items ]
        items[i].addEventListener("click", function() {

            // select the current active item
            var current = document.getElementsByClassName("active");

            // validate length of current active item
            if (current.length > 0) { 
                // replace first node [ 0 ] className with empty string
                current[0].className = current[0].className.replace(" active", "");
            }

            // apply the active className to this element
            this.className += " active";

            // init function [ buttons ]
            operationButtons();
        });
    }
}

// function [ active list ] : apply the list 'active' properties class
activeList = (id) => {

    // test route
    console.log('[ displayList ] ==> [ activeList ] : assigned active list properties');
    
    // select & remove the [ actionButtons ] container
    let actionButtons = document.querySelector('#actionButtons');
    // actionButtons.style.display = 'flex';

    // select & remove the [ operationButtons ] container
    let operationButtons = document.querySelector('#operationButtons');
    operationButtons.style.display = 'none';

    // apply the style property visibility : visible to operations element
    operationButtons.style.visibility = 'visible';

    // select all [ items ] span elements
    let span = document.querySelectorAll('.items span');

    // forEach [ span ]
    span.forEach(element => {
        // click event [ span ]
        element.addEventListener('click', ()=> {
            // reset data elements back to [ content editable ] = false
            element.setAttribute('contenteditable', 'true');

            let title = element.querySelector('.projectTitle');
            title.focus(); // focus the now content editable span element
        });
    });

    // test
    console.log(span);
};

// select the save button
const saveButton = document.querySelector('#saveButton');

// click event [ save button ]
saveButton.addEventListener('click', ()=> {

    // reset list element property [ content editable ] value to false
    one.setAttribute('contenteditable', 'fasle');
    
    // set timeout of 500ms to initiate function [ saveList ]
    setTimeout(() => {

        // init function [ saveList ]
        saveList(id);

    }, 200);

});

// function [ save list ] : reset active elements & append edited data values to page
saveList = (id) => {
    // test route
    console.log('[ activeList ] ==> [ saveList ] : save updated or edited values');
    
    // init function [ actionButtons ]
    actionButtons();

    // select the active list element
    let active = document.querySelector('#list .active');
        
    // // validate if element has been assigned an active class
    if (active.classList != 'active') {
        active.classList = 'items';
    }
    else if (active.classList === 'active') {
        // if not, assign element active class
        active.classList.remove('active');    

        // test element
        console.log('element is active : ' + active);
    }
    else {
        active.classList = 'items';
    }
    
    
    // select all [ items ] span elements
    let span = document.querySelectorAll('.items span');
    
    // forEach [ span ]
    span.forEach(element => {

        // test
        console.log('[ save list ] : span click event = content editable');

        // set span element as content editable
        element.setAttribute('contenteditable', 'false');
    });
};

// select the delete button
const delButton = document.querySelector('#delButton');

delButton.addEventListener('click', (e)=> {

    checkState(); // calculates the current list item elements

    // test event
    console.log('[ delButton ] : clicked');

    // prevent any default actions
    e.preventDefault();

    // init function [ deleteList ]
    deleteList();
});

// function [ deleteList ]
deleteList = () => {


    // select the active element
    let active = document.querySelector('.active');

    // remove active element
    active.remove();

    // test active element
    console.log(active);

    // select all list item elements
    let items = list.querySelectorAll('.items');

    // validate current items length
    if (items.length === 0) {

        // ForEach [ items ] : select all items and reset their ID's
        items.forEach(element => {

            // reset all items ID
            element.id = '';

            console.log('[ reset element ID ] : for each loop');
        });

        // test current items length
        console.log('[ deleteList ] : items length = ' + items.length);

        // 3. Reset couter if items length is zero
        counter = 0;

        // init function [ applicationDefaults ] : file // app.js
        applicationDefaults();

        // init function [ displayForm ] : file // form.js
        displayForm();

        return
    }
    if (items.length === 1) {

        // assign counter value to 1 [ reset list to one item ]
        counter = 1;

        // ForEach [ items ] : select all items and reset their ID's
        items.forEach(element => {
            
            // reset all items ID
            element.id = 'x' + counter++;

            console.log('[ reset element ID ] : for each loop');
        });
        
        // test current items length over 1
        console.log('[ deleteList ] : items length = ' + items.length + ' & ' + items[0].id);

        // init function [ actionButtons ] : file // app.js
        actionButtons();

        return
    }
    if (items.length >= 2) {

        // init function [ actionButtons ] : file // app.js
        actionButtons();
        
        // test
        console.log('more than 2 items [ delete List ] : if statement');
    }   
    else {

        // init function [ actionButtons ] : file // app.js
        actionButtons();

        items.forEach(element => {

            // reset all element ID's to an empty string
            element.id = '';
            
            // update the counter variable
            counter++;

            // assign all element ID's as [ letter x + counter value ]
            element.id = 'x' + counter;
        });
        console.log('no parameters met [ delete List ] if else');
    }
    
    // test route
    console.log('[ delButton ] ==> [ deleteList ]');
}