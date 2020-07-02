// nav btn selector
let nav_btn = document.querySelector('#nav_btn');
// nav icon selector
let nav_icon = document.querySelector('#nav_icon');
// nav list selector
let nav_ul = document.querySelector('#nav_ul');

// nav btn event
nav_btn.addEventListener('click', ()=>{

    // validate nav btn icon class
    if (nav_icon.classList != 'fas fa-times') {
        nav_icon.classList = 'fas fa-times';
    }

    // validate nav list style
    if (nav_ul.style.display == 'none') {
        nav_ul.style.display = 'flex';
    }

    // return elements to default
    else {
        nav_ul.style.display = 'none';
        nav_icon.classList = 'fas fa-bars';
    }

});