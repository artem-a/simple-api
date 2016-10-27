import { A, isEmberArray } from 'ember-array/utils';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(value) {
    return isEmberArray(value) ? value : A();
  },

  serialize(value) {
    return this.deserialize(value);
  }
});
