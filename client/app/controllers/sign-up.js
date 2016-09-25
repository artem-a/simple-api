import Controller from 'ember-controller';
import { alias } from 'ember-computed';

export default Controller.extend({
  user: alias('model'),
  isUserValid: alias('user.validations.isInvalid')
});
