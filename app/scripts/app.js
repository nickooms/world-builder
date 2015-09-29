(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  app.displayInstalledToast = () => {
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };
  app.addEventListener('dom-change', () => { });
  window.addEventListener('WebComponentsReady', () => { });
  addEventListener('paper-header-transform', e => { });
  app.onDataRouteClick = () => {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };
  app.scrollPageToTop = () => document.getElementById('mainContainer').scrollTop = 0;
  Polymer({
    is: 'wb-app',
    PROXY_URL: 'http://127.0.0.1:1337/',
    FIREBASE_URL: 'https://fiery-inferno-8058.firebaseio.com/',
    model: {
      'talen': 'taal',
      'gewesten': 'gewest',
      'gemeenten': 'gemeente',
      'straten': 'straat',
      'huisnummers': 'huisnummer'
    }
  });
})(document);