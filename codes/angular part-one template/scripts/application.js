'use strict';

var myModule = angular.module('orderMasterApp');

myModule.filter('color1', function () {
    return function (food_price) {
        var color = (food_price >= 12) ? 'red' : '';
        return 'color : ' + color;
    };
});

angular.module('orderMasterApp')
    .run(['$rootScope', '$route', function($rootScope, $route) {

        $.map($route.routes, function(route) {
            if (route.templateUrl === '') {
                route.templateUrl = 'empty';
            }
            return route;
        });

        $rootScope.routes = $route.routes;

    }]);
