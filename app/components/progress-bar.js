import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    this.$('.progress-bar-highlight').css('width', this.get('value') + '%');
  },
  updateValue: function () {
    this.$('.progress-bar-highlight').css('width', this.get('value') + '%');
  }.observes('value')
});
