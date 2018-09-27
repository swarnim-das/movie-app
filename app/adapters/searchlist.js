import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.themoviedb.org',
  namespace: '/3/search/movie?',
  api_key: 'api_key=41d5b6b35fd639418159e359413401',

  buildURL(modelName, id, snapshot, requestType, query) {
    const movie = query.movie;
    return this.host+this.namespace+this.api_key+'eb&language=en-US&query='+movie+'&page=1&include_adult=false';
  }

});
