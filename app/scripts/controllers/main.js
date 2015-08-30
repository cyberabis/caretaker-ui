'use strict';

angular.module('caretakerApp')
  .controller('MainCtrl', function ($scope, $timeout, toaster) {

  	console.log('Testing!');
  	

  	$scope.clock = "loading time..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        //$scope.clock = Date.now() // get the current time
        $scope.clock = moment().format("h:mm:ss A[,] MMM D");
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
    
  	$scope.currState = 'Idle';
  	$scope.currStateTime = moment().format("h:mm A");
  	
  	var socket = io('http://192.168.43.55:3000');
  	//var socket = io('http://localhost:3000');
  	socket.on('motion', function(msg){
		console.log(msg);
		var process = true;
		if( ($scope.currState != msg.state) && (process) ) {
			if((msg.state == 'Fall')||(msg.state == 'Aggitated')) {
				process = false;
				toaster.pop('error', "Alert", "Please, go help!");
			  	$scope.currState = msg.state;
				$scope.currStateTime = moment().format("h:m A");
				setTimeout(function(){
				  	//your code to be executed after delay
					process = true;
				}, 5000);
			} else {
				$scope.currState = msg.state;
				$scope.currStateTime = moment().format("h:m A");
			}
		}
	});

  });
