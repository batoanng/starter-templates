import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Channel {
        name: String
    }

    type Query {
        channels: [Channel]
    }
`;

export { typeDefs };
