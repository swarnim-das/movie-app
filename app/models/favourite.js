import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  // id: attr('string'),
  poster_path: attr('string')
});
