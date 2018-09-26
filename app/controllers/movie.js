import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    addToFavourites(movie) {
      let favourite = this.store.createRecord('favourite', {
        id: movie.get('id'),
        poster_path : movie.get('poster_path'),
        title: movie.get('title'),
        overview: movie.get('overview')
      });
      favourite.save();
    }
  }

});
