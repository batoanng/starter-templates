import depthLimit from "graphql-depth-limit";
import { GraphQLExtension } from "graphql-extensions";

const MAX_QUERY_DEPTH = 3;

const depthLimitValidator = () => depthLimit(MAX_QUERY_DEPTH);

const graphQLExtensions: () => GraphQLExtension = () => ({
    requestDidStart() {
        console.log(`Request started at: ${new Date()}`);
    },
    didEncounterErrors(errors) {
        console.error(`Request ended at ${new Date()} with errors`, errors);
    },
    willSendResponse(response) {
        console.log(`Request ended at ${new Date()}, with response`, {
            data: response.graphqlResponse.data,
        });
    },
});

export { depthLimitValidator, graphQLExtensions };
