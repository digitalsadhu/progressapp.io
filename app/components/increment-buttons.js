import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    left: function () {
      if (this.get('value') <= 0) return;
      this.set('value', this.get('value') - 1);
      if (this.get('value') <= 0) this.set('value', 0);
    },
    leftleft: function () {
      if (this.get('value') <= 0) return;
      this.set('value', this.get('value') - 10);
      if (this.get('value') <= 0) this.set('value', 0);
    },
    right: function () {
      if (this.get('value') >= 100) return;
      this.set('value', this.get('value') + 1);
      if (this.get('value') >= 100) this.set('value', 100);
    },
    rightright: function () {
      if (this.get('value') >= 100) return;
      this.set('value', this.get('value') + 10);
      if (this.get('value') >= 100) this.set('value', 100);
    },
  }
});
