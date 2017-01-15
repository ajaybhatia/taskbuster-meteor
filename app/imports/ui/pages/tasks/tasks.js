import './tasks.html';
import './tasks.css';
import '../../component/task-item/task-item';
import { Template } from 'meteor/templating';

import { Tasks } from '../../../api/tasks/tasks';

/**
 * @namespace Client.Templates.Tasks
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * Tasks: Event Handlers
 * @memberof Client.Templates.Tasks
 * @member Events
 */
/*****************************************************************************/
Template.Tasks.events({
});

/*****************************************************************************/
/**
 * Tasks: Helpers
 * @memberof Client.Templates.Tasks
 * @member Helpers
 */
/*****************************************************************************/
Template.Tasks.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
  },

  inCompleteNumber() {
    return Tasks.find({ completed: {$ne: true} }).count();
  }
});

/*****************************************************************************/
/** Tasks: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.Tasks
 * @member onCreated
 */
Template.Tasks.onCreated(function() {
  Meteor.subscribe('tasks.private');
});

/**
 * @memberof Client.Templates.Tasks
 * @member onRendered
 */
Template.Tasks.onRendered(function() {
});

/**
 * @memberof Client.Templates.Tasks
 * @member onDestroyed
 */
Template.Tasks.onDestroyed(function() {
});
