angular.module('myApp.people', ['ngResource'])

  .factory('People', function ($resource) {
    return $resource('/api/people');
  });