import Route from 'ember-route';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import service from 'ember-service/inject';
import { log } from 'ember-debug';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),

  resetController(controller) {
    this._super(...arguments);
    set(controller, 'password', undefined);
  },

  model(params) {
    return get(this, 'ajax')
      .request(`/reset_passwords/${params.token}`)
      .then(() => params.token)
      .catch((err) => {
        log(err);
        this.transitionTo('home');
      });
  },

  actions: {
    setPassword() {
      const controller = get(this, 'controller');
      const data = { password: get(controller, 'password') };
      return get(this, 'ajax')
        .patch(`/reset_passwords/${get(controller, 'model')}`, { data: data })
        .then(() => {
          set(controller, 'password', undefined);
          this.transitionTo('sign-in');
        })
        .catch((err) => log(err));
    }
  }
});
