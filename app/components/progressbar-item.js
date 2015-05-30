import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function (progressbarItem) {
      this.get('data').destroyRecord();
    }
  }
});
