/*
    Application Functions & Properties

    storageAvailable
        1. Set a storage variable
        2. Try to test available storage, attempt to set an item into local storage
        3. Catch any errors pertaining to specific browsers.
        4. Console log the local storage availability.
*/

// function [ storage available ]
function storageAvailable(type) {
    let storage;

    // try / catch validation method
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||

            // test name field aswell, code may not be present 
            
            // everything except Firefox
            e.name === 'QuatoaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&

            // acknowledge QuatoaExceededError only if thers something already stored
            (storage && storage.length !== 0);
    }
}

// test if local storage is avaiable
if (storageAvailable('localStorage')) {

    // test
    console.log('local storage available');

}
else {
    // test
    console.log('no storage available');
}

/*
    developer controls

    call on-load to run specific functions or view states

    create singular application states for testing

    can add or remove certain functions with ease

    makes for an easier way to debug function error or 

    invalid data processing.

*/
developerControls = () => {

    // init functions
    applicationDefaults();
    homepageScreen();
    
}
// init function [ developerControls ]
developerControls();