import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks.js';

/**
 * If the Tasks collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Tasks.find().count() === 0) {
 *       const data = Assets.getText('tasks.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Tasks.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Tasks
 * @member Fixtures
 */
Meteor.startup(() => {

});
