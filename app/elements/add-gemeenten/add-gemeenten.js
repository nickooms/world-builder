(function() {
  'use strict'

  Polymer({
    is: 'add-gemeenten',
    properties: {
      proxy: {
        type: Object,
        notify: true
      },
      'db-url': {
        type: String,
        notify: true,
        value: 'https://fiery-inferno-8058.firebaseio.com'
      },
      'add-object-type': {
        type: String,
        notify: true,
        value: 'straten'
      },
      'object-url': {
        type: String,
        notify: true,
        computed: 'getObjectUrl()'
      }
    },
    getObjectUrl: function() {
      return this['db-url'] + '/' + this['add-object-url'];
    },
    ready: function() {
      return this.$.btn.onclick = this.request.bind(this);
    },
    request: function() {
      this.$.animated.open();
      var url = 'http://127.0.0.1:1337/';
      var body = JSON.stringify({
        operation: 'ListGemeentenByGewestId',
        parametersJson: JSON.stringify([
          { Name: 'GewestId', Value: 2 },
          { Name: 'SorteerVeld', Value: 0 }
      ])});
      var promise = this.$.xhr.send({
        url: url,
        method: 'post',
        async: true,
        body: body
      });
      promise.then(function(data) {
        var objects = JSON.parse(data.xhr.responseText);
        var firebase = this.$.firebase;
        for (var i = 0; i < objects.length; i++) {
          firebase.add(objects[i]);
        }
        document.querySelector('a#cache-gemeenten').click();
        this.$.animated.close();
      }.bind(this));
    }

  });

})() 