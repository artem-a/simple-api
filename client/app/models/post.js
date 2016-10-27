import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { A } from 'ember-array/utils';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  tags: attr('array', { defaultValue: () => A() }),
  ratings: attr('array', { defaultValue: () => A() }),
  labels: attr('array', { defaultValue: () => A() }),

  user: belongsTo('user')
});
