'use strict';

const store = require('../store.js');

const concatenateMessage = (data) => {
  let newMessage = '';
  data.forEach(function(entry) {
    newMessage += entry.message;
  });
  //console.log(newMessage);
  return newMessage;
};

const onGetMyTimelineSuccess = (response) => {
  store.data = response.data;
  console.log('store.data is ', store.data);
  return(concatenateMessage(store.data));
};

module.exports = {
  onGetMyTimelineSuccess,
};
