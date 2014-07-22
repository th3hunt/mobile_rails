angular.module('myApp.people', [])

  .factory('People', function ($resource) {
    return $resource('/api/people');
  });