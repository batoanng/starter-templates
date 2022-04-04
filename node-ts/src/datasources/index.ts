import ChannelAPI from './channel-api';

export interface IDatasources {
    channelAPI: ChannelAPI;
}

export default () => ({
    channelAPI: new ChannelAPI()
});
