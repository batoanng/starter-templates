import { RESTDataSource } from "apollo-datasource-rest";

interface Channel {
    name: string;
}

interface RawChannelResponse {
    name: string;
}

class ChannelAPI extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = process.env.CHANNEL_API_URL || "http://localhost:3008";
    }

    /**
     *
     * example to map channel response
     */
    channelReducer(rawChannel: RawChannelResponse): Channel {
        return <Channel>rawChannel;
    }

    public async getChannels() {
        try {
            const channels: RawChannelResponse[] = await this.get("/channels");
            return channels.map(this.channelReducer);
        } catch (e) {
            console.error("Cannot fetch channels", e);
        }
    }
}

export default ChannelAPI;
