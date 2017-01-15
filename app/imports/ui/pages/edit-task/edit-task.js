import './edit-task.html';
import './edit-task.css';
import { Template } from 'meteor/templating';

import { Tasks } from '../../../api/tasks/tasks';

/**
 * @namespace Client.Templates.EditTask
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * EditTask: Event Handlers
 * @memberof Client.Templates.EditTask
 * @member Events
 */
/*****************************************************************************/
Template.EditTask.events({
});

/*****************************************************************************/
/**
 * EditTask: Helpers
 * @memberof Client.Templates.EditTask
 * @member Helpers
 */
/*****************************************************************************/
Template.EditTask.helpers({
  task() {
    return Tasks.findOne({_id: FlowRouter.getParam('id')});
  }
});

/*****************************************************************************/
/** EditTask: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.EditTask
 * @member onCreated
 */
Template.EditTask.onCreated(function() {
  Meteor.subscribe('tasks.private');
});

/**
 * @memberof Client.Templates.EditTask
 * @member onRendered
 */
Template.EditTask.onRendered(function() {
});

/**
 * @memberof Client.Templates.EditTask
 * @member onDestroyed
 */
Template.EditTask.onDestroyed(function() {
});
