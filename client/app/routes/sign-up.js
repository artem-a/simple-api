import Route from 'ember-route';
import get, { getProperties } from 'ember-metal/get';
import set from 'ember-metal/set';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return {
      user: get(this, 'store').createRecord('user'),
      company: get(this, 'store').createRecord('company')
    };
  },

  resetController(controller) {
    this._super(...arguments);
    set(controller, 'errorMessage', undefined);
  },

  actions: {
    createAccount() {
      const controller = get(this, 'controller');
      const { user, company } = get(controller, 'model');
      set(user, 'companyAttributes', getProperties(company, 'name'));

      return user.save()
        .then(() => this.transitionTo('application'))
        .catch((err) => set(controller, 'errorMessage', err));
    },

    willTransition() {
      const { user, company } = get(this, 'controller.model');
      user.rollbackAttributes();
      company.rollbackAttributes();
    }
  }
});
