import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function () {
      this.get('data').destroyRecord();
    },

    update: function () {
      this.get('data').save();
    }
  }
});
