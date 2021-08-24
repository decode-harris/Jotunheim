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
    if (items.length > 2 && items.length <= 4) {

        // set list style display as flex [ default display properties ]
        list.style.display = 'flex';

        // test 
        console.log('[ check state ] : items length between 2 & 4');
    }
    else if (items.length > 4) {

        // set grid properties for unordered list [ list ] element
        list.style.display = 'grid';
        list.style.gridTemplateColumns = 'repeat(2, 1fr)';
        list.style.gridAutoRows = 'minmax(100px, auto)';
        list.style.gap = '10px';
        list.style.padding = '10px';
        list.style.overflow = 'scroll';

        items.style.flexDirection = 'column';

        let lastItem = list.lastChild;
        lastItem.style.marginBottom = '10vh';

        // test last item
        console.log('last list item : ' + lastItem);

        // test length parameter
        console.log('[ check state ] : items length = ' + items.length);

        let buttonsContainer = list.querySelector('.buttons');

        console.log('[ checkstate ] : item length greater than 4 units || test : ' + actionButtons);

        // apply new absolute position properties to action buttons container
        buttonsContainer.style.position = 'fixed';
        buttonsContainer.style.bottom = '0';
        buttonsContainer.style.left = '0';
        buttonsContainer.style.zIndex = '400';
    }
    else {
        // set list style display as flex
        list.style.display = 'flex';
    }

    // test external file routing
    console.log('check state active');
}