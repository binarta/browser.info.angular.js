angular.module('browser.info', [])
    .service('browserInfo', function () {
        this.mobile = bowser.mobile || bowser.tablet;

        this.getInfo = function () {
            return bowser;
        };
    });