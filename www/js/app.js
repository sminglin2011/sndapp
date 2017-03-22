var sndapp = angular.module('sndapp', []);
sndapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'views/product/list.html',
            controller: 'ProductListCtrl'
        })
        .when('/list/:id', {
            templateUrl: 'views/product/detail.html',
            controller: 'ProductCtrl'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);