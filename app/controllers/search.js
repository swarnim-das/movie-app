import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    search_movie(movie){
      this.store.unloadAll('searchlist');
      set(this, "obj", this.store.query('searchlist', {movie: movie}))

    }

  }

});
