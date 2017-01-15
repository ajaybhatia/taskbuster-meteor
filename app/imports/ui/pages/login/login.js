import './login.html';
import './login.css';
import { Template } from 'meteor/templating';

/**
 * @namespace Client.Templates.Login
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * Login: Event Handlers
 * @memberof Client.Templates.Login
 * @member Events
 */
/*****************************************************************************/
Template.Login.events({
  'submit form, click .btn-success'(event) {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    if (username && password) {
      Meteor.loginWithPassword(username, password, (error) => {
        if (error) {
          console.log(error.reason);
        } else {
          FlowRouter.go('Tasks');
        }
      });
    }
  },
  'click .not-registered'(event) {
    FlowRouter.go('Signup');
  }
});

/*****************************************************************************/
/**
 * Login: Helpers
 * @memberof Client.Templates.Login
 * @member Helpers
 */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/** Login: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.Login
 * @member onCreated
 */
Template.Login.onCreated(function() {
});

/**
 * @memberof Client.Templates.Login
 * @member onRendered
 */
Template.Login.onRendered(function() {
});

/**
 * @memberof Client.Templates.Login
 * @member onDestroyed
 */
Template.Login.onDestroyed(function() {
});
