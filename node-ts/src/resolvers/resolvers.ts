import { IDatasources } from '../datasources';

const resolvers = {
    Query: {
        channels: async (_1: any, _2: any, { dataSources }: { dataSources: IDatasources }) => {
            try {
                return await dataSources.channelAPI.getChannels();
            } catch (e) {
                console.error(e);
            }
        }
    }
};

export { resolvers };
