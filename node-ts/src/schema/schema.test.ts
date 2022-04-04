import { typeDefs } from './schema';
import { graphql } from 'graphql';
import { addMockFunctionsToSchema, makeExecutableSchema, mockServer } from 'graphql-tools';

const getChannelsQueryTest = `
    query {
        channels {
            name
        }
    }
`;

const queriesTest = [
    {
        id: 'Channel list',
        query: getChannelsQueryTest,
        variables: {},
        context: {},
        expected: {
            data: {
                channels: [
                    {
                        name: 'Hello World'
                    },
                    {
                        name: 'Hello World'
                    }
                ]
            }
        }
    }
];

describe('Schema', () => {
    const mockSchema = makeExecutableSchema({ typeDefs });
    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            String: () => 'Hello World'
        }
    });

    it('Has valid type definitions', async () => {
        expect(async () => {
            const MockServer = mockServer(mockSchema, {});

            await MockServer.query('{__schema {type {name} } }');
        }).not.toThrow();
    });

    queriesTest.forEach((queryTest) => {
        const { id, query, context: ctx, expected, variables } = queryTest;
        it(`Testing query: ${id}`, async () => {
            return await expect(graphql(mockSchema, query, null, { ctx }, variables)).resolves.toEqual(expected);
        });
    });
});
