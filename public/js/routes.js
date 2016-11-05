(function () {
    "use strict";

    var Routes = [
        {
            name: 'login',
            url: '/login',
            component: 'auth'
            // templateUrl: 'js/components/auth/login.html'
        }
    ];

    angular.module('router', [
        'ui.router'
    ]).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dude');
        Routes.forEach(function (route) {
            $stateProvider.state(route);
        });
    });
})();