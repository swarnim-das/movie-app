import DS from 'ember-data';
import Em from 'ember';

export default DS.RESTAdapter.extend({
  buildURL(){

    return `http://localhost:3000/favourites`
  },
  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot);

    return new Promise((resolve, reject) => {
      Em.$.ajax({
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        url: 'http://localhost:3000/favourites',
        success: {
          200: ()=> {
            Em.run(null, resolve);
          }
        }
      })
    })
  },
  deleteRecord(store, type, snapshot) {
    let data = this.serialize(snapshot);

    return new Promise((resolve, reject) => {
      Em.$.ajax({
        type: "DELETE",
        contentType: "application/json",
        data: JSON.stringify(data),
        url: 'http://localhost:3000/favourites/' + snapshot.id
        
      })
    })
  }
});
