import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  //songs: [], Esto implica que al inicializar deben ir canciones

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  setupSongs: Ember.on('init', function() {
    if (!this.get('songs')) {
      this.set('songs', []);
    }
  })
});
