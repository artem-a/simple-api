import Route from 'ember-route';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import service from 'ember-service/inject';

export default Route.extend({
  ajax: service(),

  resetController(controller) {
    this._super(...arguments);
    set(controller, 'email', undefined);
  },

  actions: {
    sendToken() {
      const email = get(this, 'controller.email');
      return get(this, 'ajax')
        .post('/reset_passwords', { data: { email: email }})
        .then(() => this.transitionTo('sign-in'))
        .catch((err) => console.log(err));
    }
  }
});
