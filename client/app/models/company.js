import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', true),
    validator('length', { min: 2 })
  ]
});

export default Model.extend(Validations, {
  name: attr('string'),
  url: attr('string'),
  icon: attr('string'),

  user: belongsTo('user')
});
