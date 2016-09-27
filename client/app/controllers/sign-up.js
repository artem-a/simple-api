import Controller from 'ember-controller';
import { alias } from 'ember-computed';

export default Controller.extend({
  user: alias('model.user'),
  isUserInvalid: alias('user.validations.isInvalid'),

  company: alias('model.company'),
  isCompanyInvalid: alias('company.validations.isInvalid')
});
