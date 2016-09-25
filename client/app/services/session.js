import Session from 'ember-simple-auth/services/session';
import get from 'ember-metal/get';
// import set from 'ember-metal/set';
import service from 'ember-service/inject';

export default Session.extend({
  account: undefined,
  ajax: service(),
  store: service(),

  authenticateWithOAuth2(identification, password) {
    return this.authenticate('authenticator:oauth2', identification, password);
  },

  isCurrentUser(user) {
    const isAuthenticated = get(this, 'isAuthenticated');
    const userId = get(this, 'account.id');
    return isAuthenticated && userId === get(user, 'id');
  }
});
