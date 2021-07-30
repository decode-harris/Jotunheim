const editButton = document.querySelector('#editButton');// select the button [ edit button ]

let span = document.querySelectorAll('.editing-data span');// select all span elements
let editing = 'editing-active';// set an editing variable

// click event [ edit button ] 
editButton.addEventListener('click', ()=> {

    // init function [ edit list ] : actions.js
    editList();

});

// function [ edit list ] : initiated via [ edit button ] event
editList = (currentID) => {

    let itemsID = currentID;

    // test values
    console.log('[ edit list ] data pass-through : ' + itemsID);

    // test route
    console.log('[ edit button ] ==> [ edit list ]');

    // forEach [ span ]
    span.forEach(element => {

        // remove the active class list [ editing ]
        element.classList.remove(editing);

        // click event [ span ]
        element.addEventListener('click', ()=> {
            // test route 
            console.log('[ click event ] ==> [ editSpan ]');

            // re-init function [ edit list ]
            editList(currentID);
            
            // validate if class list is active [ editing ]
            if (element.classList != editing) {
                // apply the active class list to the current clicked element
                element.classList.add(editing);
            }
            else {
                // remove the active class list [ editing ]
                element.classList.remove(editing);
            }
        });
        
        // set all span elements on modal to [ content editable ]
        element.setAttribute('contenteditable', 'true');

    });

    // focus the first data element [ title ]
    editTitle.focus();

    // add the active class list to the first data element [ title ]
    editTitle.classList.add(editing);
    
    // init function [ save list ]
    saveList();

}