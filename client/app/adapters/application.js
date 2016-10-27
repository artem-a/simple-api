import { underscore } from 'ember-string';
import { pluralize } from 'ember-inflector';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'client/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  namespace: ENV.apiNamespace,
  coalesceFindRequests: true,

  pathForType(type) {
    const underscored = underscore(type);
    return pluralize(underscored);
  }
});
