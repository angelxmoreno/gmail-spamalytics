(function () {
    "use strict";
    angular
        .module('app')
        .run(function (GoogleApi) {
            GoogleApi.loadClient();
        })
        .service('GoogleApi', function () {
            var CLIENT_ID = FirebaseConfig.clientID;
            var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];


            var self = this;

            self.loadClient = function () {
                gapi.load('client', self.setClientCreds);
            };

            self.setClientCreds = function () {
                gapi.auth.authorize({
                    'client_id': CLIENT_ID,
                    'scope': SCOPES.join(' '),
                    'immediate': true
                }, self.loadGmailLib);
            };

            self.loadGmailLib = function (userState) {
                gapi.client.load('gmail', 'v1', function () {
                    self.handleState(userState);
                })
            };

            self.handleState = function (userState) {
                //log the user into firebase
                console.log(userState);

                //test gapi connectivity
                gapi
                    .client
                    .request({
                        'path': '/gmail/v1/users/me/labels',
                        'query': 'John'
                    })
                    .then(function handle(resp) {
                        console.info(resp)
                    });
            };

            self.login = function (cb) {
                cb = cb || handleAuthResult;
                gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES, immediate: false}, cb);
            };
        });
})();