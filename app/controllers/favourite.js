import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    deleteFavourites(params) {
      this.store.findRecord('movie',params.id,{ backgroundReload: false }).then(function(movie){
        movie.destroyRecord();
      })
    }
  }
});
