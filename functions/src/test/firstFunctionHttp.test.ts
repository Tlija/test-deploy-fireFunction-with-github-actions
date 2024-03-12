const firebaseFunctionsTest = require("firebase-functions-test");
import * as functions from '../firstFunctionHttp';

describe('firstFunctionHttp', () => {
    let wrapped: any;

    beforeAll(() => {
        const firstFunctionHttp = functions.firstFunctionHttp;
        const test = firebaseFunctionsTest();
        wrapped = test.wrap(firstFunctionHttp) as any;
    });

    afterAll(() => {
        // Cleanup the firebase-functions-test environment
        firebaseFunctionsTest().cleanup();
    });

    it('should return "test fireFunction"', async () => {
        const result = await wrapped({
            // Mock request object if your function expects it
            // Add any required fields or properties
        });
        expect(result).toEqual("test fireFunction");
    });
});
