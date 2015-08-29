'use strict';

angular.module('caretakerApp')
  .controller('MainCtrl', function ($scope, $timeout) {

  	$scope.clock = "loading time..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        //$scope.clock = Date.now() // get the current time
        $scope.clock = moment().format("h:m:ss A[,] MMM D");
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
    
  	$scope.currState = 'Idle';
  	$scope.currStateTime = moment().format("h:m A");

  	
  	var socket = io('http://192.168.43.55:3000');
  	socket.on('motion', function(msg){
		console.log(msg);
		$scope.currState = msg.state;
		$scope.currStateTime = moment().format("h:m A");
	});

  });
