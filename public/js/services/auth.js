(function () {
    "use strict";

    function AuthService(GoogleApi, $firebaseAuth) {
        this.user_data;

        this.login = function () {
            GoogleApi.login(handleSuccessLogin);
        };

        function handleSuccessLogin (user_data){
            //login to firebase via oauth token

            //set google and firebase user data to a service

            //change app state to logged in
        }
    }

    angular
        .module('app')
        .service('Auth', AuthService);
})();