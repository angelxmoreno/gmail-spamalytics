(function () {
    "use strict";
    angular
        .module('app')
        .service('GmailApi', function () {
            var self = this;

            self.getLabels = function () {
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
        });
})();