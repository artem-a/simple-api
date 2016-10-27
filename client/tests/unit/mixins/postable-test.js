import Ember from 'ember';
import PostableMixin from 'client/mixins/postable';
import { module, test } from 'qunit';

module('Unit | Mixin | postable');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostableObject = Ember.Object.extend(PostableMixin);
  let subject = PostableObject.create();
  assert.ok(subject);
});
