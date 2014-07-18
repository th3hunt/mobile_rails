Ext.define('Archon.view.Login', {
  extend: 'Ext.form.Panel',
  alias: "widget.loginview",
  requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Panel'],
  config: {
    title: 'Login',
    cls: 'login',
    listeners: [
      {
        delegate: '#logInButton',
        event: 'tap',
        fn: 'onLogInButtonTap'
      }
    ],
    items: [
      {
        xtype: 'panel',
        cls: 'logo'
      },
      {
        xtype: 'label',
        html: 'Login failed. Please enter the correct credentials.',
        itemId: 'signInFailedLabel',
        hidden: true,
        hideAnimation: 'fadeOut',
        showAnimation: 'fadeIn',
        style: 'color:#990000;margin:5px 0px; text-align:center'
      },
      {
        xtype: 'fieldset',
        title: 'Login',
        items: [
          {
            xtype: 'textfield',
            placeHolder: 'Username',
            itemId: 'userNameTextField',
            name: 'userNameTextField',
            required: true
          },
          {
            xtype: 'passwordfield',
            placeHolder: 'Password',
            itemId: 'passwordTextField',
            name: 'passwordTextField',
            required: true
          }
        ]
      },
      {
        xtype: 'button',
        itemId: 'logInButton',
        ui: 'action',
        padding: '10px',
        margin: '10px',
        text: 'Log In'
      }
    ]
  },
  onLogInButtonTap: function () {
    var me = this;

    var usernameField = me.down('#userNameTextField')
      , passwordField = me.down('#passwordTextField')
      , label = me.down('#signInFailedLabel');

    label.hide();

    var username = usernameField.getValue()
      , password = passwordField.getValue();

    // Using a delayed task in order to give the hide animation above
    // time to finish before executing the next steps.
    var task = Ext.create('Ext.util.DelayedTask', function () {

      label.setHtml('');

      me.fireEvent('signInCommand', me, username, password);

      usernameField.setValue('');
      passwordField.setValue('');
    });

    task.delay(500);
  },

  showSignInFailedMessage: function (message) {
    var label = this.down('#signInFailedLabel');
    label.setHtml(message);
    label.show();
  }
});