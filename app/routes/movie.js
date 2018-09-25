import Route from '@ember/routing/route';

export default Route.extend({
  model(){

    let model = {
      trending: this.store.findAll('movie'),
      upcoming: this.store.findAll('upcoming')
    };
   //console.log(model);
    return model;
  },
  actions : {
    transitionToDetails(movie) {
      //console.log(movie.get("id"));
      this.transitionTo("details", movie.get("id"));
    }
  },
  setupController (controller, model)  {
      this._super(controller, model);
  }
});
