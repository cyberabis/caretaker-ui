'use strict';

/**
 * @ngdoc function
 * @name caretakerApp.controller:ProgressionCtrl
 * @description
 * # ProgressionCtrl
 * Controller of the caretakerApp
 */
angular.module('caretakerApp')
  .controller('ProgressionCtrl', function ($scope) {

  	var falls = [[1440354600000,1], [1440441000000,0], [1440527400000,0], [1440613800000,0], [1440700200000,2], [1440786600000,0], [1440873000000,2]];

	$scope.chartConfig1 = {
        options: {
            chart: {
                type: 'column',
            	zoomType: 'x'
            },
	        legend: {
	            enabled: false
	        }
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'Falls',
                data: falls,
                color: '#EC5D57'
            }
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        loading: false,
        size: {
        	height: 150
        }
    };

    var aggitated = [[1440354600000,2], [1440441000000,1.5], [1440527400000,2], [1440613800000,2.5], [1440700200000,2.5], [1440786600000,1.5], [1440873000000,3]];

	$scope.chartConfig2 = {
        options: {
            chart: {
                type: 'column',
            	zoomType: 'x'
            },
	        legend: {
	            enabled: false
	        }
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'Aggitation',
                data: aggitated,
                color: '#F39019'
            }
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: 'Hours'
            }
        },
        loading: false,
        size: {
        	height: 150
        }
    };

    var walking = [[1440354600000,2], [1440441000000,3.5], [1440527400000,2.5], [1440613800000,0.5], [1440700200000,3], [1440786600000,3], [1440873000000,2]];

	$scope.chartConfig3 = {
        options: {
            chart: {
                type: 'column',
            	zoomType: 'x'
            },
	        legend: {
	            enabled: false
	        }
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'Walking',
                data: walking,
                color: '#F5D328'
            }
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: 'Hours'
            }
        },
        loading: false,
        size: {
        	height: 150
        }
    };

    var idle = [[1440354600000,8], [1440441000000,12], [1440527400000,9], [1440613800000,13], [1440700200000,6], [1440786600000,6], [1440873000000,7]];

	$scope.chartConfig4 = {
        options: {
            chart: {
                type: 'column',
            	zoomType: 'x'
            },
	        legend: {
	            enabled: false
	        }
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'Idle',
                data: idle,
                color: '#70BF41'
            }
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: 'Hours'
            }
        },
        loading: false,
        size: {
        	height: 150
        }
    };


  });
