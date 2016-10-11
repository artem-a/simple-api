import Controller from 'ember-controller';
import { alias } from 'ember-computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  password: [
    validator('presence', true),
    validator('length', { min: 6 })
  ]
});

export default Controller.extend(Validations, {
  password: undefined,
  isPasswordInvalid: alias('validations.isInvalid')
});
