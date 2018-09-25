import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteFavourites(movie){
      //console.log(movie.get('id'));
      this.store.findRecord('myfavourite',movie.get('id'),{ backgroundReload: false }).then(function(movie){
        movie.destroyRecord();
      });
      this.transitionTo('myfavourite');
    }
  }
});
