import React from 'react';
import logo from './logo.png';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ChannelContainer from './components/ChannelContainer';
import { apolloClient } from './uitls/graphql/client';
import { ApolloProvider } from '@apollo/client';

function App() {
    const store = configureStore();

    return (
        <>
            {!apolloClient && <div>Start GraphQL failed</div>}
            {apolloClient && (
                <ApolloProvider client={apolloClient}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <div className="App">
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                            <ChannelContainer />
                        </BrowserRouter>
                    </Provider>
                </ApolloProvider>
            )}
        </>
    );
}

export default App;
