// declare the application view states
const home = document.querySelector('#home');
const load = document.querySelector('#load');

// function [ applicationDefaults ] : remove all states from application view
applicationDefaults = () => {
    // test route
    console.log('[ applicationDefaults ] : remove all states from application view');

    // apply the [ default property ] value to all application states
    home.style.display = 'none';
    load.style.display = 'none';
    form.style.display = 'none';
    list.style.display = 'none';
};

// function [ homepageScreen ] : reactive display the homepage state view 
homepageScreen = () => {
    // test route
    console.log('[ developerControls ] ==> [ homepageScreen ] : display homepage view state to current user');

    // assign the homepage view to display : flex
    home.style.display = 'flex';
};

// function [ loadingScreen ] : display the loading screen element between click events
loadingScreen = () => {

    // test route
    console.log('[ startButton ] ==> [ loadingScreen ]');

    load.style.display = 'flex';

    // delay init function [ displayForm ] by 2 seconds
    setTimeout(() => {

        // init function [ applicationDefaults ] : clear application state view
        applicationDefaults();

        // init function [ displayForm ] : data flow [ loadingScreen ] ==> [ displayForm ]
        displayForm();

    }, 2000);
}

// select [ startApplication ] button
let startApplication = document.querySelector('#startApplication');
let status;

// click event [ startApplication ]
startApplication.addEventListener('click', ()=> {

    // test
    console.log('start button clicked');

    // init function [ applicationDefaults ] : clear application state view
    applicationDefaults();

    status = 'loading';

    // init function [ loadingScreen ] : display the loading screen element
    loadingScreen(status); // 
});