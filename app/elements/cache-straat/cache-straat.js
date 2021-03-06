(function () {
  'use strict';

  Polymer({
    is: 'cache-straat',
    properties: {
    	firebaseId: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
    	firebaseUrl: {
        type: String,
        computed: 'getFirebaseUrl(firebaseId)',
        notify: true
      }
    },
    getFirebaseUrl: function(firebaseId) {
      return 'https://fiery-inferno-8058.firebaseio.com/straten/' + firebaseId;
    }
  });
})();