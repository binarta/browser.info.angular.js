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

        it('add class to body when browser is tablet', function () {
            browserInfo.tablet = true;

            runner.run();

            expect(body.hasClass('tablet')).toBeTruthy();
        });

        it('no mobile class on body when browser is not mobile', function () {
            browserInfo.mobile = false;

            runner.run();

            expect(body.hasClass('mobile')).toBeFalsy();
            expect(body.hasClass('tablet')).toBeFalsy();
        });
    });

    describe('browserInfo service', function () {

        describe('on mobile (phone) device', function () {
            beforeEach(function () {
                resolver.mobile = true;
                resolver.tablet = false;
            });

            it('values are available', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeTruthy();
                expect(browserInfo.tablet).toBeFalsy();
            }));
        });

        describe('on tablet device', function () {
            beforeEach(function () {
                resolver.mobile = false;
                resolver.tablet = true;
            });

            it('values are available', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeFalsy();
                expect(browserInfo.tablet).toBeTruthy();
            }));
        });

        describe('on desktop', function () {
            beforeEach(function () {
                resolver.mobile = false;
                resolver.tablet = false;
            });

            it('values are available', inject(function (browserInfo) {
                expect(browserInfo.mobile).toBeFalsy();
                expect(browserInfo.tablet).toBeFalsy();
            }));
        });

        it('get all resolver info', inject(function (browserInfo) {
           expect(browserInfo.getInfo()).toEqual(resolver);
        }));
    });
});