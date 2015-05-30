import DS from 'ember-data';
var attr = DS.attr;

var ProgressBar = DS.Model.extend({
  title: attr('string'),
  value: attr('number'),
  max: attr('number')
});

ProgressBar.reopenClass({
  FIXTURES: [
    { id: 1, title: 'security', value: 30, max: 100 },
    { id: 2, title: 'javascript', value: 60, max: 100 },
    { id: 3, title: 'postgres', value: 30, max: 100 }
  ]
});

export default ProgressBar;

