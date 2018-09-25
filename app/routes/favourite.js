import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // console.log("Hello");
    return this.store.findAll("favourite");
    // return {};
  }

});
