import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/**
 * The FlowRouter client side routing definitions.
 * @namespace Client.Routes
 */

import './templates.js';


/**
 * * Name: Home
 * * URL: /
 * * Layout: MasterLayout
 * * Template: Home
 * @memberof Client.Routes
 * @member Home
 */
FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('MasterLayout', {yield: "Home"});
  }
});


/**
 * * Name: Tasks
 * * URL: /tasks
 * * Layout: MasterLayout
 * * Template: Tasks
 * @memberof Client.Routes
 * @member Tasks
 */
FlowRouter.route('/tasks', {
  name: 'Tasks',
  action() {
    if (Meteor.userId()) {
      BlazeLayout.render('MasterLayout', {yield: "Tasks"});
    } else {
      FlowRouter.go('Login');
    }
  }
});


/**
 * * Name: NewTask
 * * URL: /new-task
 * * Layout: MasterLayout
 * * Template: NewTask
 * @memberof Client.Routes
 * @member NewTask
 */
FlowRouter.route('/new-task', {
  name: 'NewTask',
  action() {
    if (Meteor.userId()) {
      BlazeLayout.render('MasterLayout', {yield: "NewTask"});
    } else {
      FlowRouter.go('Login');
    }
  }
});

/**
 * * Name: EditTask
 * * URL: /edit-task
 * * Layout: MasterLayout
 * * Template: EditTask
 * @memberof Client.Routes
 * @member EditTask
 */
FlowRouter.route('/edit-task/:id', {
  name: 'EditTask',
  action() {
    if (Meteor.userId()) {
      BlazeLayout.render('MasterLayout', {yield: "EditTask"});
    } else {
      FlowRouter.go('Login');
    }
  }
});


/**
 * * Name: Login
 * * URL: /login
 * * Layout: MasterLayout
 * * Template: Login
 * @memberof Client.Routes
 * @member Login
 */
FlowRouter.route('/login', {
  name: 'Login',
  action() {
    BlazeLayout.render('MasterLayout', {yield: "Login"});
  }
});

/**
 * * Name: Signup
 * * URL: /signup
 * * Layout: MasterLayout
 * * Template: Signup
 * @memberof Client.Routes
 * @member Signup
 */
FlowRouter.route('/signup', {
  name: 'Signup',
  action() {
    BlazeLayout.render('MasterLayout', {yield: "Signup"});
  }
});
