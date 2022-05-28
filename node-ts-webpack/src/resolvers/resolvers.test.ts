import { resolvers } from './resolvers';

jest.spyOn(global.console, 'error');

const mockGetChannelsResolve = jest.fn();
const mockGetChannelsReject = jest.fn();

describe('Resolvers', () => {
    describe('Success queries', () => {
        const dataSources = {
            channelAPI: {
                getChannels: mockGetChannelsResolve.mockResolvedValue([{ name: 'channel 1' }])
            }
        };

        it('Query - channels', async () => {
            await resolvers.Query.channels(undefined, undefined, {
                dataSources
            } as any);
            expect(dataSources.channelAPI.getChannels).toBeCalled();
        });
    });

    describe('Errors', () => {
        const dataSources = {
            channelAPI: {
                getChannels: mockGetChannelsReject.mockRejectedValue([])
            }
        };
        it('Query - channels', async () => {
            await resolvers.Query.channels(undefined, undefined, {
                dataSources
            } as any);
            expect(console.error).toHaveBeenCalledTimes(1);
        });
    });
});
