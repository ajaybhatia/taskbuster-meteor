import './navigation.html';
import './navigation.css';
import { Template } from 'meteor/templating';

/**
 * @namespace Client.Templates.Navigation
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * Navigation: Event Handlers
 * @memberof Client.Templates.Navigation
 * @member Events
 */
/*****************************************************************************/
Template.Navigation.events({
  'click .navbar-brand'(event) {
    $('.new-task').parent().removeClass('active');
    $('.tasks').parent().removeClass('active');
    FlowRouter.go('Home');
  },

  'click .tasks'(event) {
    $('.new-task').parent().removeClass('active');
    $('.tasks').parent().addClass('active');
    FlowRouter.go('Tasks');
  },

  'click .new-task'(event) {
    $('.tasks').parent().removeClass('active');
    $('.new-task').parent().addClass('active');
    FlowRouter.go('NewTask');
  },

  'click .login'(event) {
    FlowRouter.go('Login');
  },

  'click .logout'(event) {
    Meteor.logout(() => {
       FlowRouter.go('/');
    });
  }
});

/*****************************************************************************/
/**
 * Navigation: Helpers
 * @memberof Client.Templates.Navigation
 * @member Helpers
 */
/*****************************************************************************/
Template.Navigation.helpers({
  notCurrentUser() {
    return !Meteor.userId();
  }
});

/*****************************************************************************/
/** Navigation: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.Navigation
 * @member onCreated
 */
Template.Navigation.onCreated(function() {
});

/**
 * @memberof Client.Templates.Navigation
 * @member onRendered
 */
Template.Navigation.onRendered(function() {
});

/**
 * @memberof Client.Templates.Navigation
 * @member onDestroyed
 */
Template.Navigation.onDestroyed(function() {
});
