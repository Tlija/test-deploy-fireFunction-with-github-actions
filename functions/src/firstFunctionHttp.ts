import * as functions from "firebase-functions/v2/https";

export const firstFunctionHttp = functions.onCall({region: "europe-west4"},
    async () => {
        return "test fireFunction";
    }
);