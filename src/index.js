import 'babel-polyfill';
import App from './components/App';
import configureStore from './store/configureStore';
import fullpage from 'fullpage.js'; // eslint-disable-line no-unused-vars
import $ from 'jquery';
import Ps from 'perfect-scrollbar';
import { setPresentationSlide } from './actions/presentationActions';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadSlides } from './actions/slideActions';

/* Creates Redux Store */
const store = configureStore();

/* Load Slides */
store.dispatch(loadSlides()).then(() => {
    $(document).ready(() => {
        /* Initializes fullpage */
        $('#fullpage').fullpage({
            /**
             * Dispatches the new presentation slide.
             */
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
                store.dispatch(setPresentationSlide(nextSlideIndex));
            }
        });

        /* Initializes perfect-scrollbar */
        let toolbarContentContainer = document.getElementById('menu-content');
        Ps.initialize(toolbarContentContainer, {
            minScrollbarLength: '1em',
            suppressScrollX: true
        });
    });
});

/* Renders the Application */
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
