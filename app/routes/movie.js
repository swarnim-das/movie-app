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
      console.log(movie.constructor.modelName);
      //console.log(movie.get("id"));
      this.transitionTo("details", movie.get('id'), {queryParams: {modelName: movie.constructor.modelName}});
    }
  },
  setupController (controller, model)  {
      this._super(controller, model);
  }
});
