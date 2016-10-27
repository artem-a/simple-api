import Route from 'ember-route';
import get from 'ember-metal/get';
import Postable from 'client/mixins/postable';

export default Route.extend(Postable, {
  model(params) {
    return get(this, 'store').findRecord('post', params.post_id);
  }
});
