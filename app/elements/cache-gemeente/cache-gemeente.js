(function () {
  'use strict';

  Polymer({
    is: 'cache-gemeente',
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
      },
      setajax: {
        type: String,
        computed: 'setajax()',
        notify: true
      }
    },
    getFirebaseUrl: function(firebaseId) {
      return 'https://fiery-inferno-8058.firebaseio.com/gemeenten/' + firebaseId;
    }/*,
    setajax: function () {
      debugger;
      var ajax = this.$.ajax;
      ajax.url = 'http://127.0.0.1:1337/';
      ajax.params = {
        operation: 'ListStraatnamenByGemeenteId',
        parametersJson: JSON.stringify([
          { Name: 'GmeenteId', Value: 23 },
          { Name: 'SorteerVeld', Value: 0 }
        ])};
      ajax.generateRequest();
    },
    hresponse: function(request) {
      var queries = [];
      var rows = request.detail.response;
      console.log(rows.length);
      var data = this.$.firebase.data;
      for (var i = 0; i < rows.length; i++) {
        queries.push(this.$.firebase.add(rows[i]));
      }
    }*/
  });
})();