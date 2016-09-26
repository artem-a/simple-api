import Component from 'ember-component';
import get from 'ember-metal/get';
import service from 'ember-service/inject';

export default Component.extend({
  tagName: 'nav',
  classNames: ['navbar-fixed-top navbar navbar-default'],

  session: service(),

  actions: {
    invalidateSession() {
      get(this, 'session').invalidate();
    }
  }
});
