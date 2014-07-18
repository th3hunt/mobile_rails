Ext.application({
  name: 'Archon',

  requires: [
    'Ext.MessageBox'
  ],

  views: [
    'Login',
    'MainMenu'
  ],

  controllers: [
    'Login'
  ],

  launch: function () {
    Ext.Viewport.add([
      { xtype: 'loginview' },
      { xtype: 'mainmenuview' }
    ]);

    if (Archon.newSession) {
      Ext.Viewport.setActiveItem(0);
    } else {
      Ext.Viewport.setActiveItem(1);
    }
  }
});

Ext.Ajax.on('beforerequest', function (conn, request, eOpts) {
  var csrfEl = Ext.query('meta[name="csrf-token"]')[0]
    , csrfToken = csrfEl && csrfEl.content;

  request.headers = request.headers || {};
  request.headers['X-CSRF-Token'] = csrfToken;
});

Ext.Loader.setConfig({
  enabled: false
});