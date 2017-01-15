/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks.js';


if (Meteor.isServer) {
  describe('Tasks', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Tasks) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
