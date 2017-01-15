import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('tasks.public', function tasksPublic() {
 *       let cursor = Tasks.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Tasks.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Tasks
 * @member Publications
 */
Meteor.publish('tasks.public', function tasksPublic() {
    let cursor = Tasks.find({
        userId: { $exists: false },
    }, {
        fields: Tasks.publicFields
    });

    return cursor;
});

Meteor.publish('tasks.private', function tasksPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Tasks.find({
        userId: this.userId,
    }, {
        fields: Tasks.privateFields,
    });

    return cursor;
});
