import Route from 'ember-route';
import get from 'ember-metal/get';
import Postable from 'client/mixins/postable';

export default Route.extend(Postable, {
  model() {
    return get(this, 'store').createRecord('post');
  }
});
