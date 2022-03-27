import React from 'react';
import logo from './logo.png';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

function App() {
    const store = configureStore();

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
