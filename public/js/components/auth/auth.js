(function () {
    "use strict";

    function loginCtrl($scope) {
        $scope.login = function () {

        };
    }

    var componentConfig = {
        templateUrl: 'js/components/auth/login.html',
        controller: loginCtrl
    };

    angular
        .module('app')
        .component('auth', componentConfig);
})();