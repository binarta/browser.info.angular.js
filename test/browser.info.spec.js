describe('browser.info.js', function () {
    beforeEach(module('browser.info'));

    var resolver = bowser;

    describe('on run', function () {
        var runner, body, browserInfo;

        beforeEach(inject(function ($document, browserInfoRunner, _browserInfo_) {
            runner = browserInfoRunner;
            browserInfo = _browserInfo_;
            body = $document.find('body');
        }));

        it('add class to body when browser is mobile', function () {
            browserInfo.mobile = true;

            runner.run();

            expect(body.hasClass('mobile')).toBeTruthy();
        });

        it('no mobile class on body when browser is not mobile', function () {
            browserInfo.mobile = false;

            runner.run();

            expect(body.hasClass('mobile')).toBeFalsy();
        });
    });

    describe('browserInfo service', function () {

        describe('on mobile (phone) device', function () {
            beforeEach(function () {
                resolver.mobile = true;
            });

            it('mobile should be true', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeTruthy();
            }));
        });

        describe('on mobile (tablet) device', function () {
            beforeEach(function () {
                resolver.tablet = true;
            });

            it('mobile should be true', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeTruthy();
            }));
        });

        describe('on desktop', function () {
            beforeEach(function () {
                resolver.mobile = false;
                resolver.tablet = false;
            });

            it('mobile should be true', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeFalsy();
            }));
        });

        it('get all resolver info', inject(function (browserInfo) {
           expect(browserInfo.getInfo()).toEqual(resolver);
        }));
    });
});