'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const fbEvents = require('./fb-auth/events.js');

$(() => {
  setAPIOrigin(location, config);

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  // Hide log out link on page load
  $('.logout-btn').hide();

  // set fbEvents handlers
  fbEvents.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');
