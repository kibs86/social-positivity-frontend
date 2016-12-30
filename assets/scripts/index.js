'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const fbEvents = require('./facebook/events.js');

$(() => {
  setAPIOrigin(location, config);

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  // fb init placeholder
  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '1157020744413721',
  //     cookie     : true,  // enable cookies to allow the server to access
  //                         // the session
  //     xfbml      : true,  // parse social plugins on this page
  //     version    : 'v2.8' // use graph api version 2.8
  //   });
  // };

  // set fbEvents handlers
  fbEvents.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');
