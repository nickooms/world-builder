(function () {
  'use strict';

  Polymer({
    is: 'cache-gewesten',
    properties: {
      items: {
        type: Array,
        notify: true,
      }
    },
    nav: function(e, detail) {
      var target = e.target;
      while (target && target !== e.currentTarget) {
        if (target.href && target.href.indexOf('//') >= 0) {
          return true;
        }
        target = target.parentNode;
      }
      e.stopPropagation();
      e.preventDefault();
      var se = detail.sourceEvent || {};
      var url = '/cache-gewest/' + e.currentTarget.getAttribute('target');
      if (se.ctrlKey || se.metaKey) {
        window.open(url);
      } else {
        var a = this.$.gewest;
        a.href = url;
        a.click();
      }
    }
  });
})();