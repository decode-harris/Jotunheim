// apply default list state
list.style.display = 'none';

// select button [ show ] : display list once created
let show = document.querySelector('.show'); // change to show list button on final build
// apply default button state
show.style.display = 'none';

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

        // set new properties for list element
        // list.style.background = '#000';
        // list.style.height = '100%';
        list.style.overflow = 'scroll';

        // test 
        console.log('grid properties applied to list element');
        
        return
    }
    else {
        // set list style display as flex
        list.style.display = 'flex';
    }

    // select the button [ open ] on the unordered list element
    let open = document.querySelector('.open'); // change to new-button on final build

    // click event [ open ] : open the form
    open.addEventListener('click', ()=> {
        // display the form
        form.style.display = 'flex';
        // hide the list
        list.style.display = 'none';
        // display the show button
        show.style.display = 'block';

    });

    // click event [ show ] : display the list element
    show.addEventListener('click', (e)=> { // change to list button on final build

        // event : prevent default form submit
        e.preventDefault();

        // validate if grid properties are present
        if (list.style.gap === '10px') {

            // display list as grid
            list.style.display = 'grid';

            // test
            console.log('list is displayed as grid');
        }
        else {
            // display list as flex
            list.style.display = 'flex';
        }
        
        // hide the form
        form.style.display = 'none';

        return
        
    });
    
    // test external file routing
    console.log('check state active');
}