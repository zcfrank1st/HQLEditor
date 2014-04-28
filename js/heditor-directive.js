angular
    .module('heditorDirect', [])
    .directive('datadpNavbar', function () {
        "use strict";
        return {
            restrict: 'AE',
            templateUrl: '../template/navbar.html'
        };
    });
