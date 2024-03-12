import firebaseFunctionsTest from "firebase-functions-test";
import * as functions from '../firstFunctionHttp';

describe('firstFunctionHttp', () => {
    let wrapped: any;

    beforeAll(() => {
        const firstFunctionHttp = functions.firstFunctionHttp;
        const test = firebaseFunctionsTest();
        wrapped = test.wrap(firstFunctionHttp as  any) ;
    });

    afterAll(() => {
        // Cleanup the firebase-functions-test environment
        firebaseFunctionsTest().cleanup();
    });

    it('should return "test fireFunction"', async () => {
        const result = await wrapped({});
        expect(result).toEqual("test fireFunction");
    });
});
