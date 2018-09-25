import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.themoviedb.org',
  namespace: '/3/trending/all/',
  buildURL() {
    return `${this.host + this.namespace}day?api_key=f222e0b1e0f065860c773520ed583e87`
  }
});
