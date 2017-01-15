import './signup.html';
import './signup.css';
import { Template } from 'meteor/templating';

/**
 * @namespace Client.Templates.Signup
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * Signup: Event Handlers
 * @memberof Client.Templates.Signup
 * @member Events
 */
/*****************************************************************************/
Template.Signup.events({
  'submit form, click .btn-success'(event) {
    event.preventDefault();

    const username = $('#username').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const password_confirm = $('#password_confirm').val();

    if (username && email) {
      if (password === password_confirm) {
        var userObject = {
          username: username,
          mail: email,
          password: password
        };

        Accounts.createUser(userObject, (error) => {
           if (error) {
             console.log(error).reason;
           } else {
             FlowRouter.go('Tasks');
           }
        });
      }
    }
  },
  'click .already-registered'(event) {
    FlowRouter.go('Login');
  }
});

/*****************************************************************************/
/**
 * Signup: Helpers
 * @memberof Client.Templates.Signup
 * @member Helpers
 */
/*****************************************************************************/
Template.Signup.helpers({
});

/*****************************************************************************/
/** Signup: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.Signup
 * @member onCreated
 */
Template.Signup.onCreated(function() {
});

/**
 * @memberof Client.Templates.Signup
 * @member onRendered
 */
Template.Signup.onRendered(function() {
});

/**
 * @memberof Client.Templates.Signup
 * @member onDestroyed
 */
Template.Signup.onDestroyed(function() {
});
