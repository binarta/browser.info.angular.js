(function () {
    angular.module('browser.info', [])
        .service('browserInfo', BrowserInfoService)
        .service('browserInfoRunner', ['browserInfo', '$document', BrowserInfoRunner])
        .run(['browserInfoRunner', function (runner) {
            runner.run();
        }]);

    function BrowserInfoService() {
        this.mobile = bowser.mobile || bowser.tablet;

        this.getInfo = function () {
            return bowser;
        };
    }

    function BrowserInfoRunner(browserInfo, $document) {
        this.run = function () {
            var body = $document.find('body');
            browserInfo.mobile ? body.addClass('mobile') : body.removeClass('mobile');
        };
    }
})();