'use strict';

const showHomeTemplate = require('../templates/home.handlebars');

const onLoginSuccess = (response) => {
  console.log("Login successful");
  console.log(response);
  $('#content').html(showHomeTemplate());
  $('.login-btn').hide();
  $('.button-collapse').sideNav('hide');
  $('.description').hide();
};

const onLoginPartial = (response) => {
  console.log("User logged into facebook, but not the app");
  console.log(response);
};

const onLoginFailure = (response) => {
  console.log("Login failed");
  console.log(response);
};

module.exports = {
  onLoginSuccess,
  onLoginPartial,
  onLoginFailure,
};
