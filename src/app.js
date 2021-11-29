import React from 'react';
import { createStore } from 'redux';
import movieApp from './reducers/reducers';
import { Provider } from 'react-redux';

function App() {
    const myFlixStore = createStore(movieApp)
    return (
        <Provider store={myFlixStore}>

        </Provider>

    );
}

export default App;