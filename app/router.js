import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bands', function() {
    this.route('band', { path: ':slug' }, function() {
      this.route('songs');
      this.route('albums');
    });
  });
});

export default Router;
