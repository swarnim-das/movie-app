import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.themoviedb.org',
  namespace: '/3/movie/',
  buildURL() {
    return `${this.host + this.namespace}upcoming?api_key=41d5b6b35fd639418159e359413401eb&language=en-US&page=1`
  }
});
