import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  authorizer: 'authorizer:application',
  namespace: 'api/v1',
  coalesceFindRequests: true
});
