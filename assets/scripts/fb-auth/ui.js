'use strict';

const store = require('../store.js');
const showHomeTemplate = require('../templates/home.handlebars');
const showTitleTemplate = require('../templates/title.handlebars');

const onLoginSuccess = (response) => {
  console.log("Login successful");
  console.log(response);
  store.user = response.authResponse;
  console.log('store.user is ', store.user);
  $('#content').html(showHomeTemplate());
  $('.login-btn').hide();
  $('.button-collapse').sideNav('hide');
  $('.description').hide();
  $('.logout-btn').show();
};

const onLoginPartial = (response) => {
  console.log("User logged into facebook, but not the app");
  console.log(response);
};

const onLoginFailure = (response) => {
  console.log("Login failed");
  console.log(response);
};

const onLogoutSuccess = (response) => {
  console.log("Logged out");
  console.log(response);
  $('#content').html(showTitleTemplate());
  $('.login-btn').show();
  $('.button-collapse').sideNav('hide');
  $('.description').show();
  $('.logout-btn').hide();
};

module.exports = {
  onLoginSuccess,
  onLoginPartial,
  onLoginFailure,
  onLogoutSuccess,
};
