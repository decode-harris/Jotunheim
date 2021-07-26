/*
    states functions & properties

    checkState
        1. Remove the form from view on load.
        2. Checks the length of the current list items.
        3. Validates for display property assignment values.
        4. Assigns unordered list element to either property 
            display : flex, or property display : grid + grid attributes.
        5. Provides routes testing.


*/

// function [ check state ] : checks app views
checkState = () => {

    // on form submit, remove form from view
    form.style.display = 'none';

    // select all current items created
    let items = document.querySelectorAll('.list .items');

    // check the number of items created
    if (items.length > 2) {

        // set grid properties for unordered list [ list ] element
        list.style.display = 'grid';
        list.style.gridTemplateColumns = 'repeat(2, 1fr)';
        list.style.gridAutoRows = 'minmax(100px, auto)';
        list.style.gap = '10px';
        list.style.padding = '10px';

        // test 
        console.log('grid properties applied to list element');
        
        return
    }
    else {
        // set list style display as flex
        list.style.display = 'flex';
    }

    // test external file routing
    console.log('check state active');
}