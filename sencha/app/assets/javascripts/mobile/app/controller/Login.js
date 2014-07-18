Ext.define('Archon.controller.Login', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      loginView: 'loginview',
      mainMenuView: 'mainmenuview'
    },
    control: {
      loginView: {
        signInCommand: 'onSignInCommand'
      },
      mainMenuView: {
        signOffCommand: 'onSignOffCommand'
      }
    }
  },

  onSignInCommand: function (view, username, password) {
    console.log('Username: ' + username + '\n' + 'Password: ' + password);

    var me = this
      , loginView = me.getLoginView();

    if (username.length === 0 || password.length === 0) {
      loginView.showSignInFailedMessage('Please enter your username and password.');
      return;
    }

    loginView.setMasked({
      xtype: 'loadmask',
      message: 'Signing In...'
    });

    Ext.Ajax.request({
      url: '/users/sign_in',
      method: 'post',
      params: {
        'user[email]': username,
        'user[password]': password
      },
      success: function (response) {
        me.sessionActive = true;
        me.signInSuccess();
      },
      failure: function (response) {
        me.sessionActive = false;
        me.signInFailure('Login failed. Please try again later.');
      }
    });
  },

  signInSuccess: function () {
    console.log('Signed in.');

    var loginView = this.getLoginView();
    mainMenuView = this.getMainMenuView();
    loginView.setMasked(false);

    Ext.Viewport.animateActiveItem(mainMenuView, this.getSlideLeftTransition());
  },

  signInFailure: function (message) {
    var loginView = this.getLoginView();
    loginView.showSignInFailedMessage(message);
    loginView.setMasked(false);
  },

  onSignOffCommand: function () {
    var me = this;

    Ext.Ajax.request({
      url: '/users/sign_out',
      method: 'DELETE',
      success: function (response) {
        me.sessionActive = false;
      },
      failure: function (response) {
        // TODO: You need to handle this condition.
      }
    });

    Ext.Viewport.animateActiveItem(this.getLoginView(), this.getSlideRightTransition());
  },

  getSlideLeftTransition: function () {
    return { type: 'slide', direction: 'left' };
  },

  getSlideRightTransition: function () {
    return { type: 'slide', direction: 'right' };
  }
});