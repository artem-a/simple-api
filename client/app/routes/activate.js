import Route from 'ember-route';
import get from 'ember-metal/get';
import service from 'ember-service/inject';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  ajax: service(),

  model(params) {
    return get(this, 'ajax').request(`users/${params.token}/activate`)
      .then(() => this.transitionTo('sign-in'))
      .catch(() => this.transitionTo('sign-up'));
  }
});
