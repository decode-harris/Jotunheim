list.style.display = 'none';

let show = document.querySelector('.show');
show.style.display = 'none';

checkState = () => {

    // on form submit, remove form from view
    form.style.display = 'none';

    // select all current items created
    let items = document.querySelectorAll('.items');

    // validate if form display is set to none
    if (form.style.display === 'none') {

        // set list style display as flex
        list.style.display = 'flex';

        // select the button [ open ] on the unordered list element
        let open = document.querySelector('.open');

        // check the number of items created
        // if (items.length > 2) {

        //     list.style.display = 'grid';

        //     // test 
        //     console.log('testing for length of 6 or more items');
        // }
        
        // click event [ open ] : open the form
        open.addEventListener('click', ()=> {
            // display the form
            form.style.display = 'flex';
            // hide the list
            list.style.display = 'none';
            // display the show button
            show.style.display = 'block';

            return
        });

        show.addEventListener('click', (e)=> {

            e.preventDefault();

            // display the list
            list.style.display = 'flex';
            // hide the form
            form.style.display = 'none';

            return
            
        });
    }
    


    // test external file routing
    console.log('check state active');
}