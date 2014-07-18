Ext.define('Archon.view.MainMenu', {
  extend: 'Ext.Panel',
  requires: ['Ext.TitleBar'],
  alias: 'widget.mainmenuview',
  config: {
    layout: {
      type: 'fit'
    },
    listeners: [
      {
        delegate: '#logOffButton',
        event: 'tap',
        fn: 'onLogOffButtonTap'
      }
    ],
    items: [
      {
        xtype: 'titlebar',
        title: 'Main Menu',
        docked: 'top',
        items: [
          {
            xtype: 'button',
            text: 'Log Off',
            itemId: 'logOffButton',
            align: 'right'
          }
        ]
      }
    ]
  },
  onLogOffButtonTap: function () {
    this.fireEvent('signOffCommand');
  }
});