(function () {
    "use strict";

    function NavigationCtrl() {

    };

    var componentConfig = {
        templateUrl: 'js/components/navigation/navigation.html',
        controller: NavigationCtrl
    };

    angular
        .module('app')
        .component('navigation', componentConfig);
})();