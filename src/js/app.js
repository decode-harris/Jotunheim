// selector [ form ] : form inputs
let cou = document.querySelector('#cou');
let cit = document.querySelector('#cit');
let hot = document.querySelector('#hot');
// let beg = document.querySelector('#beg');
// let end = document.querySelector('#end');

// selector [ btn_pre ] : btn preview 
let btn_pre = document.querySelector('#btn_pre');

// event [ btn_pre ] : add form info
btn_pre.addEventListener('click', (e)=> {
    
    // prevent form submit
    e.preventDefault();

    // init [ runSys ]
    runSys();

    // test
    console.log('btn pre active');

});

// function [ runSys ] : run system
function runSys() {
    
    // init [ runVal ]
    runVal();

    // test
    console.log('function [ runSys ] running');
}

// function [ runVal ] : run validation
function runVal() {

    // validate input values
    if (cou.value == '' || cou.value == null) {

        // form helper message
        let helper = document.createElement('span');
        helper.innerHTML = 'please fill in a country';

        // form label value
        let cou_lab = document.querySelector('#cou_lab');
        cou_lab.innerHTML = helper.innerHTML;
        
        // form input props
        cou.style.border = '2px solid red';
        cou.style.height = '50px';
        
        // focus form input
        cou.focus();
        
        // test
        console.log('cou input is null');

        return
    }
    if (cit.value == '' || cit.value == null) {

        // form helper message
        let helper = document.createElement('span');
        helper.innerHTML = 'please fill in a city';

        // form label value
        let cit_lab = document.querySelector('#cit_lab');
        cit_lab.innerHTML = helper.innerHTML;
        
        // form input props
        cit.style.border = '2px solid red';
        cit.style.height = '50px';
        
        // focus form input
        cit.focus();
        
        // test
        console.log('cit input is null');

        return
    }
    if (hot.value == '' || hot.value == null) {

        // form helper message
        let helper = document.createElement('span');
        helper.innerHTML = 'please fill in a hotel';

        // form label value
        let hot_lab = document.querySelector('#hot_lab');
        hot_lab.innerHTML = helper.innerHTML;
        
        // form input props
        hot.style.border = '2px solid red';
        hot.style.height = '50px';
        
        // focus form input
        hot.focus();
        
        // test
        console.log('hot input is null');

        return
    }
    // once validation passes, run application
    else {

        // init runApp
        runApp();
    }

    // test
    console.log('function [ runVal ] running');

    return
}

// function [ runApp ] : run application
function runApp() {
    
    // selector [ form ] : form container
    let form = document.querySelector('#form');
    
    // remove element
    if (form.style.display != 'none' || form.style.display != null) {
        form.style.display = 'none';
    }
    
    // create information view
    runInf();

    // test for validation
    app.style.background = 'red';

    // test
    console.log('function [ runApp ] running');

}

// function [ runInf ] : run preview
function runInf() {
    
    // selector [ pre ] : preview container
    let pre = document.querySelector('#pre');

    // show element
    if (pre.style.display == 'none') {
        pre.style.display = 'flex';
    }
    
    // selector [ output ] : output preview information
    let cou_out = document.querySelector('#cou_out');
    let cit_out = document.querySelector('#cit_out');
    let hot_out = document.querySelector('#hot_out');
    
    // assign input values to output html
    cou_out.innerHTML = cou.value;
    cit_out.innerHTML = cit.value;
    hot_out.innerHTML = hot.value;

    // test
    console.log('function [ runInf ] running');

}

// selector [ btn_add ] : btn add
let btn_add = document.querySelector('#btn_add');

// event [ btn_add ] : add form information
btn_add.addEventListener('click', ()=>{
    
    // selector [ cal ] : calendar container
    let cal = document.querySelector('#cal');

    let btn = document.querySelector('#btn');

    // validate cal props
    if (cal.style.display == 'none' || cal.style.display == null) {
        // show cal
        cal.style.display = 'flex';

        // show btn
        btn.style.display = 'flex';

        // remove pre
        pre.style.display = 'none';

        // remove form
        form.style.display = 'none';

        


    }
    else {
        cal.style.display = 'none';
    }
    
    // init [ viewCal ]
    viewCal();

    // test
    console.log('event [ btn_add ] : run [ viewCal ]');

});

// function [ viewCal ] : calender view
function viewCal() {

    // selector [ calendar ] : calendar grid
    let calendar = document.querySelector('#calendar');

    // selector [ output ] : output preview information
    let cou_out = document.querySelector('#cou_out');
    let cit_out = document.querySelector('#cit_out');
    let hot_out = document.querySelector('#hot_out');

    // create destination list
    let ul = document.createElement('ul');

    // create destination list info
    let li_cou = document.createElement('li');
    let li_cit = document.createElement('li');
    let li_hot = document.createElement('li');

    // assign destination list info
    li_cou.innerHTML = cou.value;
    li_cit.innerHTML = cit.value;
    li_hot.innerHTML = hot.value;

    // append list items to ul
    ul.appendChild(li_cou);
    ul.appendChild(li_cit);
    ul.appendChild(li_hot);

    // append ul to calendar
    calendar.appendChild(ul);

    // test
    console.log('function [ viewCal ] running');

}

// selector [ btn_cre ] : create button
let btn_cre = document.querySelector('#btn_cre');

// event [ btn_cre ] : new form view
btn_cre.addEventListener('click', ()=>{
    // selector [ pre ] : preview container
    let pre = document.querySelector('#pre');

    // remove pre 
    if (pre.style.display != 'none' || pre.style.display != null) {
        pre.style.display = 'none';
    }

    // selector [ cal ] : calendar container
    let cal = document.querySelector('#cal');

    // remove cal 
    if (cal.style.display != 'none' || cal.style.display != null) {
        cal.style.display = 'none';
    }
    
    // selector [ form ] : form container
    let form = document.querySelector('#form');
    
    // show form
    if (form.style.display == 'none' || form.style.display == null) {
        form.style.display = 'flex';

        // reset form input
        cou.value = '';
        cit.value = ''
        hot.value = '';

        // reset for label
        cou_lab.innerHTML = 'country';
        cit_lab.innerHTML = 'city';
        hot_lab.innerHTML = 'hotel';

    }
    else {
        form.style.display = 'none';
    }

    // test
    console.log('event [ btn_cre ] : form new');

});


// selector [ btn_clr ] : clear btn
let btn_clr = document.querySelector('#btn_clr');

// event [ btn_clr ] : clear form input
btn_clr.addEventListener('click', (e)=>{

    // prevent form submit
    e.preventDefault();

    // reset form input
    cou.value = '';
    cit.value = ''
    hot.value = '';

    // reset input size
    cou.style.height = '25px';
    cit.style.height = '25px';
    hot.style.height = '25px';

    // reset border
    cou.style.border = '2px solid var(--black)';
    cit.style.border = '2px solid var(--black)';
    hot.style.border = '2px solid var(--black)';

    // reset for label
    cou_lab.innerHTML = 'country';
    cit_lab.innerHTML = 'city';
    hot_lab.innerHTML = 'hotel';

    

    // test
    console.log('event [ btn_clr ] : form cleared');

});





    // use code for calender view

    // let ul = document.createElement('ul');

    // let li_cou = document.createElement('li');
    // let li_cit = document.createElement('li');
    // let li_hot = document.createElement('li');

    // li_cou.innerHTML = cou.value;
    // li_cit.innerHTML = cit.value;
    // li_hot.innerHTML = hot.value;

    // ul.appendChild(li_cou);
    // ul.appendChild(li_cit);
    // ul.appendChild(li_hot);

    // pre.appendChild(ul);

    // for(let i = 0; i < info.length; i++) {
    //     console.log(info[i]);
    // }

    // object [ list ] : create list elment
    // let list = {
    
    //     // create ul
    //     function() {
    //         document.createElement(ul);
    //     }

    // }

    // let ul = new(this.list);