// select the form [ edit ]
let editForm = document.querySelector('.editForm');
// remove the form [ edit ] : default properties
editForm.style.display = 'none';

/*
    1. display edit form [ click event ]
    2. get current values 
    3. place values into form inputs
    4. save or discard current edits
    5. 

*/

// // select the edit button
// let edit = document.querySelector('.edit');

// // click event [ edit ]
// edit.addEventListener('click', (e)=> {

//     // prevent default form submit
//     e.preventDefault(); 

    

// });



editingForm = () => {

    // select current values
    let title, text, cost;

    // 2. get current values
    // console.log('current title : ' + h2.innerHTML);
    // console.log('current desc : ' + text.innerHTML);
    // console.log('current cost : ' + cost.innerHTML);

    // if (editForm.style.display != 'flex') {
    //     editForm.style.display = 'flex';
    // }

    // 2.5 : select form input elements
    // let editCompany = document.querySelector('#companyEdit');
    // let editDescription = document.querySelector('#descriptionEdit');
    // let editPayment = document.querySelector('#paymentEdit');

    // editCompany.innerHTML = h2.innerHTML;

    // select all create list [ items ] li
    let items = document.querySelectorAll('.items');
    // test creation
    console.log('modal items : ' + items.length);

    let overlay = document.querySelector('.overlay');
    overlay.style.width = '0%';

    // forEach [ items ]
    items.forEach(element => {

        // click event [ items ]
        element.addEventListener('click', ()=> {

            element.style.position = 'relative';

            // validate width of overlay element
            if (overlay.style.width != '100%') {
                overlay.style.width = '100%';

                element.className += ' active';
                // test
                console.log('if overlay width : 0%');
            }
            else if (overlay.style.width === '100%') {

                const main = document.querySelector('.main');
                main.addEventListener('click', ()=> {

                    element.removeAttribute('class', 'active');
                    // overlay.style.width = '0%';
                });
            }
            else {

                
                
                // test
                console.log('if overlay width : 100% ');
            }

            
            
            
            

            



            // test
            console.log('appending overlay to current list element');
            
            // test route [ displayList --> editingForm]

            

        });
    });

}