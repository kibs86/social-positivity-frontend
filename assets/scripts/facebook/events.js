'use strict';

//const store = require('../store.js');
const ui = require('./ui.js');

const onGetMyAuth = () => {
  console.log('Get my auth');
  FB.api('/me', function(response) {
    console.log(response);
  });
};

const onGetMyTimeline = () => {
  console.log('Get my timeline');
  // FB.api('/me/posts', function(response) {
  //   ui.onGetMyTimelineSuccess(response);
  // });
  new Promise((resolve, reject) => {
    FB.api('/me/posts', function(response) {
      if (!response || response.error) {
        reject('response.error');
      } else {
        resolve(response);
      }
    });
  })
  .then((response) => {
    let newMessage = ui.onGetMyTimelineSuccess(response);
    return newMessage;
  })
  .then((newMessage) => {
    console.log('newMessage is ', newMessage);
  })
  .catch((err) => {
    console.error(err);
  });
};


const addHandlers = () => {
  $('#content').on('click', '#get-auth-btn', onGetMyAuth);
  $('#content').on('click', '#get-timeline-btn', onGetMyTimeline);
};

module.exports = {
  addHandlers,
};
