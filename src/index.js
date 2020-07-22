import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './app.js';

// import store from './store';

function Main() {
    return (
        <Provider store={store} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);