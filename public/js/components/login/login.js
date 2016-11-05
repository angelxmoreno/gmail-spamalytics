(function () {
    'use strict';

    function loginCtrl($scope, Auth) {
        $scope.login = function () {
            Auth.login();
        };
    }

    var componentConfig = {
        templateUrl: 'js/components/auth/login.html',
        controller: loginCtrl
    };

    angular
        .module('app')
        .component('login', componentConfig);
})();