import "source-map-support/register";
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import dataSources from "./datasources";
import { depthLimitValidator, graphQLExtensions } from "./utils/graphql";

const app = express();

startServer();

function startServer() {
    const host = process.env.HOST || "0.0.0.0";
    const port = process.env.PORT || "5000";
    const graphqlPath = process.env.GRAPHQL_URI || "/graphql";

    const apolloConfig: ApolloServerExpressConfig = {
        typeDefs,
        resolvers,
        dataSources,
        extensions: [graphQLExtensions],
        plugins: [
            {
                serverWillStart(requestContext) {
                    console.log(
                        "Apollo server starting with config",
                        requestContext.apollo
                    );
                },
            },
        ],
        validationRules: [depthLimitValidator()],
        introspection: process.env.GRAPHQL_URI === "development",
        playground: {
            settings: {
                "editor.theme": "dark",
            },
        },
    };

    const server = new ApolloServer(apolloConfig);

    server.applyMiddleware({ app, path: graphqlPath });

    app.listen({ host, port }, () => {
        console.log(
            `Server ready at http://localhost:${port}${server.graphqlPath}`
        );
    });
}
