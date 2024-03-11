const test = require('firebase-functions-test')();

describe('firstFunctionHttp', () => {
    let wrapped;

    beforeAll(() => {
        wrapped = test.wrap(require('../firstFunctionHttp').firstFunctionHttp);
    });

    afterAll(() => {
        test.cleanup();
    });

    it('should return "test fireFunction"', async () => {
        const result = await wrapped();
        expect(result).toEqual("test fireFunction");
    });
});
