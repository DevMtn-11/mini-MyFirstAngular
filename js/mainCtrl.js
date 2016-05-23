angular.module('friendsList')
  .controller('mainCtrl', function($scope) {
    $scope.name = 'Joe';

    $scope.friends = [
      'James',
      'Nick',
      'Ben',
      'Jeremy'
    ];

    $scope.addFriend = function() {
      $scope.friends.push($scope.newFriend);
      $scope.friend = '';
    };

    console.log($scope);

  });
