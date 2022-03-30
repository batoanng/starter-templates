import ChannelAPI from "./channel-api";

const mockGet = jest.fn().mockResolvedValue([
    {
        name: "",
    },
]);

jest.mock("apollo-datasource-rest", () => {
    class MockRESTDataSource {
        baseUrl = "";
        get = mockGet;
    }

    return {
        RESTDataSource: MockRESTDataSource,
    };
});

describe("Channel data source", () => {
    const dataSource = new ChannelAPI();

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("Should be calling the channels to get channel data from API", async () => {
        expect(dataSource).toBeTruthy();

        await dataSource.getChannels();

        expect(mockGet).toHaveBeenCalledTimes(1);
        expect(mockGet).toHaveBeenCalledWith("/channels");
    });
});
