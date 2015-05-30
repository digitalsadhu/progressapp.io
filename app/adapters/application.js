import DS from 'ember-data';
import Ember from 'ember';

var adapter;

// function caselessSubstrMatch(needle, haystack) {
//   needle = needle.toString().toLowerCase();
//   haystack = haystack.toString().toLowerCase();

//   return haystack.indexOf(needle) >= 0;
// }

// if (window.ContractsApp.MOCK_API) {
//   adapter = DS.FixtureAdapter.extend({

//     //filters don't work with fixture adapter out of the box, adding support
//     //here
//     queryFixtures: function(records, query) {
//       if (!query) {
//         return records;
//       }

//       var searchParams = query.query;
//       return records.filter(record => {

//         if (!!searchParams) {
//           return Object.keys(record).some(key => {
//             return !!record[key] && caselessSubstrMatch(searchParams, record[key]);
//           });
//         } else {
//           return Object.keys(query).every(queryKey => {
//             return record[queryKey] === query[queryKey];
//           });
//         }

//       });
//     }
//   });
// } else {
  adapter = DS.RESTAdapter.extend({
    namespace: 'api',

    // @private
    // @override
    ajaxOptions: function (url, type, options) {
      var hash = this._super(url, type, options);

      if (type === 'GET' && !!hash.data && !!hash.data.where) {
        hash.url = hash.url + '?filter=' + encodeURIComponent(JSON.stringify(hash.data));
        delete hash.data.where;
      }

      return hash;
    },

    // @override
    ajaxError: function(jqXHR, responseText, errorThrown) {
      var error = this._super(jqXHR, responseText, errorThrown);

      if (jqXHR && jqXHR.status === 422) {
        return new DS.InvalidError(Ember.$.parseJSON(jqXHR.responseText));
      } else {
        return error;
      }
    },
  });
// }

export default adapter;
