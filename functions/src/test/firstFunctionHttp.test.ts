import  firebaseFunctionsTest  from "firebase-functions-test" ;

describe('firstFunctionHttp', () => {
    let wrapped: () => Promise<any>;

    beforeAll(() => {
        const myFunctions = require('../firstFunctionHttp');
        const firstFunctionHttp = myFunctions.firstFunctionHttp;
        const wrappedTest = firebaseFunctionsTest();
        wrapped = wrappedTest.wrap(firstFunctionHttp);
    });

    afterAll(() => {
        firebaseFunctionsTest().cleanup();
    });

    it('should return "test fireFunction"', async () => {
        const result = await wrapped();
        expect(result).toEqual("test fireFunction");
    });
});
