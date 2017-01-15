import './new-task.html';
import './new-task.css';
import { Template } from 'meteor/templating';

/**
 * @namespace Client.Templates.NewTask
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * NewTask: Event Handlers
 * @memberof Client.Templates.NewTask
 * @member Events
 */
/*****************************************************************************/
Template.NewTask.events({
  'submit form, click .btn-primary'(event) {
    event.preventDefault();

    if ($('#text').val()) {
      let doc = {
        text: $('#text').val(),
        userId: Meteor.userId(),
        owner: Meteor.user().username,
        createdAt: new Date(),
      }

      Meteor.call('tasks.insert', doc, (error) => {
        if (error) {
          console.log(error);
        } else {
          FlowRouter.go('Tasks');
        }
      });
    }
  }
});

/*****************************************************************************/
/**
 * NewTask: Helpers
 * @memberof Client.Templates.NewTask
 * @member Helpers
 */
/*****************************************************************************/
Template.NewTask.helpers({
});

/*****************************************************************************/
/** NewTask: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.NewTask
 * @member onCreated
 */
Template.NewTask.onCreated(function() {
});

/**
 * @memberof Client.Templates.NewTask
 * @member onRendered
 */
Template.NewTask.onRendered(function() {
});

/**
 * @memberof Client.Templates.NewTask
 * @member onDestroyed
 */
Template.NewTask.onDestroyed(function() {
});
