import { IDatasources } from "../datasources";

const resolvers = {
    Query: {
        channels: async (
            t: any,
            t2: any,
            { dataSources }: { dataSources: IDatasources }
        ) => {
            return await dataSources.channelAPI.getChannels();
        },
    },
};

export { resolvers };
