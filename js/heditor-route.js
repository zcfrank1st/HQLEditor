angular
    .module('heditorRoute', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../template/editor.html'
            })
            .when('/history', {
                templateUrl: '../template/table.html'
            })
            .otherwise({
                redirectTo : '/'
            });
    });