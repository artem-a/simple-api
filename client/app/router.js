import Router from 'ember-router';
import config from './config/environment';

const RouterInstance = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

RouterInstance.map(function() {
  this.route('home', { path: '/' });

  this.route('dashboard');

  this.route('password-forgot');
  this.route('password-reset', { path: 'password-reset/:token' });

  // Authentication
  this.route('activate', { path: 'activate/:token' });
  this.route('sign-up');
  this.route('sign-in');
});

export default RouterInstance;
