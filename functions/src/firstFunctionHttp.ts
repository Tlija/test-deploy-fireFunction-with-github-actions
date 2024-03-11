import * as functions from "firebase-functions";

export const firstFunctionHttp = functions.region("europe-west4").https.onCall(
    async () => {
        return "test fireFunction";
    }
);
