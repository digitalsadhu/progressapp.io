import Ember from 'ember';

export default Ember.Component.extend({
  showModal: false,

  progressBarName: '',

  actions: {
    toggleShowModal: function () {
      this.toggleProperty('showModal');
    },

    createProgressBar: function () {
      this.sendAction('createProgressBar', {
        title: this.get('progressBarName'),
        value: 0,
        max: 100
      });
      this.set('showModal', false);
      this.set('progressBarName', '');
    }
  }
});
