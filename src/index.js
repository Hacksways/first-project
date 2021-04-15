import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state.jsx';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

reportWebVitals();
