// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic', 'templates', 'myApp.people', 'myApp.browser'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'intro.html',
        controller: 'IntroCtrl'
      })
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .state('main.seek', {
        url: '/seek',
        templateUrl: 'seek.html'
      })
      .state('main.browse', {
        url: '/browse',
        templateUrl: 'browse.html',
        controller: 'BrowserCtrl'
      })
      .state('main.destroy', {
        url: '/destroy',
        templateUrl: 'destroy.html'
      });

    $urlRouterProvider.otherwise('/');

  })

  .controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {
    // Called to navigate to the main app
    $scope.startApp = function () {
      $state.go('main.seek');
    };

    $scope.next = function () {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
      $scope.slideIndex = index;
    };
  })

  .controller('MainCtrl', function ($scope, $state, $ionicSideMenuDelegate) {
    $scope.toIntro = function () {
      $state.go('intro');
    };

    $scope.logout = function () {
      window.location.href = '/users/sign_out';
    };

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });
