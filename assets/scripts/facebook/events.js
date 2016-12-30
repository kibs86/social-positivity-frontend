'use strict';

const onClickLogin = () => {
  console.log('Clicked login button');
};


const addHandlers = () => {
  $('#login-btn').on('click', onClickLogin);
};

module.exports = {
  addHandlers,
};
