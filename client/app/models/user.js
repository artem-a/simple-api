import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: [
    validator('presence', true),
    validator('length', { min: 4, max: 32 })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('presence', true),
    validator('length', { min: 6 })
  ]
});

export default Model.extend(Validations, {
  username: attr('string'),
  email: attr('string'),
  password: attr('string')
});
