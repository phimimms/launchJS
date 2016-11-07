import 'babel-polyfill';
import App from './components/App';
import configureStore from './store/configureStore';
import fullpage from 'fullpage.js'; // eslint-disable-line no-unused-vars
import $ from 'jquery';
import Ps from 'perfect-scrollbar';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadSlides } from './actions/slideActions';

const store = configureStore();

store.dispatch(loadSlides()).then(() => {
    $(document).ready(() => {
        /* Initializes fullpage */
        $('#fullpage').fullpage();

        /* Initializes perfect-scrollbar */
        let toolbarContentContainer = document.getElementById('menu-content');
        Ps.initialize(toolbarContentContainer, {
            minScrollbarLength: '1em',
            suppressScrollX: true
        });
    });
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
