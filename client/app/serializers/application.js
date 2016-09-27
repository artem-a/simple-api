import { underscore } from 'ember-string';
import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    return underscore(key);
  },

  keyForRelationship(key) {
    return underscore(key);
  },

  serializeAttribute(snapshot, json, key) {
    if (key in snapshot.changedAttributes()) {
      return this._super(...arguments);
    }
  }
});
