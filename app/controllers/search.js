import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search_movie(movie){
      
      return this.store.query('searchlist', {movie:movie});
    }
  }
});
