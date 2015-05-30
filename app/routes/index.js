import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('progressBar');
  },

  actions: {
    createProgressBar: function (data) {
      this.store.createRecord('progressBar', data).save();
    }
  }
});
