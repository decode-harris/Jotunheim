// selector [ app ] : app
let app = document.querySelector('#app');

// selector [ btn_lau ] : launch btn
let btn_lau = document.querySelector('#btn_lau');

// event [ btn_lau ] : launch application
btn_lau.addEventListener('click', ()=> {
    
    // validate app props
    if (app.style.display == 'none') {
        app.style.display = 'grid';
    }
    // default app props
    else {
        app.style.disply = 'none';
    }

    // test
    console.log('btn_lau activated');

    return
});

// btn exit selector
let btn_exi = document.querySelector('#btn_exi');

// exit app
btn_exi.addEventListener('click', ()=> {
    
    // validate app props
    if (app.style.display == 'grid') {
        app.style.display = 'none';
    }
    // default app props
    else {
        app.style.display = 'flex';
    }

    // test
    console.log('btn_exi activated');
    
    return
});
