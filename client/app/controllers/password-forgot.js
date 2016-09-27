import Controller from 'ember-controller';
import { alias } from 'ember-computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: validator('format', { type: 'email' })
});

export default Controller.extend(Validations, {
  email: undefined,
  isEmailInvalid: alias('validations.isInvalid')
});
