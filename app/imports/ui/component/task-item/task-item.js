import './task-item.html';
import './task-item.css';
import { Template } from 'meteor/templating';

import { Tasks } from '../../../api/tasks/tasks';

/**
 * @namespace Client.Templates.TaskItem
 * @memberof Client.Templates
 */

/*****************************************************************************/
/**
 * TaskItem: Event Handlers
 * @memberof Client.Templates.TaskItem
 * @member Events
 */
/*****************************************************************************/
Template.TaskItem.events({
  'click .glyphicon-remove'(event) {
    event.preventDefault();

    if (confirm('Are you sure?')) {
      Meteor.call('tasks.remove', this._id);
    }
  },

  'click .glyphicon-edit'(event) {
    event.preventDefault();

    FlowRouter.go('/edit-task/' + this._id);
  },

  'click .glyphicon-ok'(event) {
    event.preventDefault();

    Meteor.call('tasks.update', [this._id, { completed: !this.completed }]);
  }
});

/*****************************************************************************/
/**
 * TaskItem: Helpers
 * @memberof Client.Templates.TaskItem
 * @member Helpers
 */
/*****************************************************************************/
Template.TaskItem.helpers({
  completed() {
    return Tasks.findOne({_id: this._id, completed: true}) ? "completed text-muted" : "";
  }
});

/*****************************************************************************/
/** TaskItem: Life cycle hooks */
/*****************************************************************************/
/**
 * @memberof Client.Templates.TaskItem
 * @member onCreated
 */
Template.TaskItem.onCreated(function() {
  Meteor.subscribe('tasks.private');
});

/**
 * @memberof Client.Templates.TaskItem
 * @member onRendered
 */
Template.TaskItem.onRendered(function() {
});

/**
 * @memberof Client.Templates.TaskItem
 * @member onDestroyed
 */
Template.TaskItem.onDestroyed(function() {
});
