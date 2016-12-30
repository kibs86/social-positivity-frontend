'use strict';

const onLoginSuccess = (response) => {
  console.log("Login successful");
  console.log(response);
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
