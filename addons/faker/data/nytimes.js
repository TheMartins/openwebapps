
// this doesn't work yet, because window.navigator.apps does not appear to be reachable 
// from content script, which sucks.

// we may have to shim window.navigator.apps in the content script itself
// postMessaging back to the add-on, which will then do its thing.

// set up the reading list HTML
var helpers = document.getElementsByClassName('helpers')[0];
if (helpers) {
// try adding a link
var readingList = '<dt class="customize">Reading List</dt><ol id="links"></ol>';

var dl = document.createElement('dl');
dl.setAttribute('class','helpers');
dl.style.bottom = '350px';
dl.innerHTML = readingList;

helpers.parentNode.insertBefore(dl, helpers);
}

