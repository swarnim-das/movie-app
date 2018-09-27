import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({

  poster_path: attr('string'),
  title: attr('string'),
  release_date: attr('string'),
  popularity: attr('string'),
  overview: attr('string')
});
