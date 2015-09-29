(function () {
  'use strict';

  Polymer({
    is: 'cache-taal',
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
    getFirebaseUrl: firebaseId =>
      `https://fiery-inferno-8058.firebaseio.com/talen/${firebaseId}`
  });
})();