import DS from 'ember-data';
import Em from 'ember';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'favourites',


  createRecord(store, type, snapshot ){
    let data = this.serialize(snapshot, {includeId: true});
    //console.log(snapshot.modelName);
     debugger;
      return new Promise(function (resolve, reject)  {
          Em.$.ajax({
             type: "POST",
             contentType: "appication/json",
             data: JSON.stringify(data),
             url: `http://localhost:3000/favourites/${snapshot.id}`,
            //  success: {
            //    200: {
            //
            //    },
            //    400: {
            //
            //    }
            //  },
            // error: {
            //    404: {
            //
            //    }
            // }


          })
      })
  },
  buildURL(modelName, id, snapshot, requestType, query) {
    debugger;
    return `${this.host}/${this.namespace}`
  }
});

