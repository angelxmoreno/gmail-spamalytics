(function () {
    "use strict";

    var Routes = [
        {
            name: 'login',
            url: '/login',
            component: 'login'
        }
    ];

    var RouteConfig = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        Routes.forEach(function (route) {
            $stateProvider.state(route);
        });
    };

    angular.module('router', [
        'ui.router'
    ]).config(RouteConfig);
})();