angular.module('friendsList')
  .controller('mainCtrl', function($scope) {

    $scope.friends = [
      'James',
      'Nick',
      'Ben',
      'Jeremy'
    ];

    $scope.addFriend = function() {
      $scope.friends.push($scope.friend);
      $scope.friend = '';
    };

  });
