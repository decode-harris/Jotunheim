/*
    Edit Functions & Properties

    editList
        1. Gets editable values passed into the function.
        2. Sets all editable values to content-editable = true.
        3. Focus on the top editable element.
        4. Re-assign edited data to local storage.
        5. 
*/

// select the edit button
const editButton = document.querySelector('#editButton');

// function [ edit list ]
editList = (editTitle, editText, editCost) => {

    // test route
    console.log('[ edit button ] ==> [ edit list ]');
    
    // set all modal data values to content editable
    editTitle.setAttribute('contenteditable', 'true');
    editText.setAttribute('contenteditable', 'true');
    editCost.setAttribute('contenteditable', 'true');

    // focus the first data element [ title ]
    editTitle.focus();

    // re-assign new values to local storage

}