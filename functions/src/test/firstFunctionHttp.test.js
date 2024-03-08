const assert = require('assert');
const functionsMock = {
    onCall: (options, callback) => {
        return callback(); // Simulate function execution
    }
};
describe('firstFunctionHttp', () => {
    it('should return "test fireFunction"', async () => {

        const result = await functionsMock.onCall({ region: "europe-west4" }, async () => {
            return "test fireFunction"; // Simulate function execution
        });

        assert.strictEqual(result, 'test fireFunction');
    });
});