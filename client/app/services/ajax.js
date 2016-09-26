import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'client/config/environment';

export default AjaxService.extend({
  namespace: ENV.apiNamespace
});
