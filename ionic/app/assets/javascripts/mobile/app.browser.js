angular.module('myApp.browser', ['myApp.people'])

  .controller('BrowserCtrl', function ($scope, $timeout, People) {
    $scope.people = People.query();

    $scope.morePeople = function () {
      $timeout(function () {
        var len = $scope.people.length;
        $scope.people.push({
          name: 'Foo' + (len + 1),
          email: 'foo@test.org'
        });
        $scope.people.push({
          name: 'Bar' + (len + 1),
          email: 'bar@test.org'
        });

        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, 200);
    };

    $scope.fetchNewPeople = function () {
      $timeout(function () {
        $scope.people.unshift({name: 'New Guy' + Date.now(), email: 'newguy@test.org'});
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
      }, 500);
    };
  });