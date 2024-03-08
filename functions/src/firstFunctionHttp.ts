import functions from "firebase-functions/v2/https";

exports.firstFunctionHttp = functions.onCall({region: "europe-west4"},
    async () => {
        return "test fireFunction";
    }
);
