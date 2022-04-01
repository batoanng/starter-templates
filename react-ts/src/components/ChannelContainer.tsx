import React from 'react';
import { useChannelsQuery } from '../generated/graphql';

function ChannelContainer() {
    const { loading, data } = useChannelsQuery();

    return (
        <>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <div>{data && data.channels?.map((channel) => <div key={channel?.name}>{channel?.name}</div>)}</div>
            )}
        </>
    );
}

export default ChannelContainer;
