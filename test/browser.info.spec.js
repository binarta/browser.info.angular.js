describe('browser.info.js', function () {
    beforeEach(module('browser.info'));

    var resolver = bowser;

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

    });
});