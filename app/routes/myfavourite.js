import Route from '@ember/routing/route';

export default Route.extend({
  model() {

    return this.store.findAll('myfavourite')
  },
  actions : {
    transitionToDetails(movie) {
      this.transitionTo("details", movie.get("id"));
    }
  }

});
