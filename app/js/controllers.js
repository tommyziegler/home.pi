'use strict';

/* Controllers */


function SwitchListCtrl($scope, $http, Switch) {

  $scope.switches = Switch.query();

  $scope.turnSwitchOn = function (id) {
    Switch.turnOn(id)
  };

  $scope.turnSwitchOff = function (id) {
    Switch.turnOff(id)
  };

  $scope.turnAllSwitchesOn = function () {
  	Switch.turnAllSwitchesOn()
  };

  $scope.turnAllSwitchesOff = function () {
  	Switch.turnAllSwitchesOff()
  };

}


function LocationUrlCtrl($scope) {

    $scope.$watch('locationurl', function () {
        $scope.parser.href = $scope.url;
    });

    $scope.init = function () {
        $scope.parser = document.createElement('a');
        $scope.url = window.location;
    }

}
