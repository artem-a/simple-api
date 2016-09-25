import Route from 'ember-route';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return get(this, 'store').createRecord('user');
  },

  resetController(controller) {
    this._super(...arguments);
    set(controller, 'errorMessage', undefined);
  },

  actions: {
    createAccount() {
      const controller = get(this, 'controller');
      const model = get(controller, 'model');
      return model.save()
        .then(() => this.transitionTo('application'))
        .catch((err) => set(controller, 'errorMessage', err));
    }
  }
});
