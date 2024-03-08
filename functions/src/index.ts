import functions = require('firebase-functions/v2/https');

exports.firstFunctionHttp = functions.onCall({ region: "europe-west4"},
    async request => {
        return "test fireFunction";
    }
);