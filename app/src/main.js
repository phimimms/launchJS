'use strict';

// Third-Party Dependencies
import fullpage from 'fullpage.js';
import Ps from 'perfect-scrollbar';
import $ from 'jquery';
import { render } from 'react-dom';

// Slides
import IntroSlide from './js/slides/introduction/intro';
import ResourcesSlide from './js/slides/introduction/Resources';
import ScopeIntroSlide from './js/slides/scope/scopeIntro';
import UndeclaredVariablesSlide from './js/slides/scope/undeclaredVariables';
import HoistingSlide from './js/slides/scope/hoisting';
import functionDeclarationsSlide from './js/slides/scope/functionDeclarations';
import functionExpressionsSlide from './js/slides/scope/functionExpressions';
import ScopeIQSlide from './js/slides/scope/scopeIQ';
import ES6ScopeSlide from './js/slides/scope/es6Scope';

$(document).ready(function() {
    var slidesContainer = document.getElementById('slides');

    var createSlideParentElement = function(index) {
        var el = document.createElement('div');
        el.id = 'section' + index;
        el.className = 'slide';

        return el;
    };

    const Slides = [
        IntroSlide,
        ResourcesSlide,
        ScopeIntroSlide,
        UndeclaredVariablesSlide,
        HoistingSlide,
        functionDeclarationsSlide,
        functionExpressionsSlide,
        ScopeIQSlide,
        ES6ScopeSlide
    ];

    for (let i = 0, n = Slides.length; i < n; i++) {
        let Slide = Slides[i];

        // Renders the slide to the DOM
        let container = createSlideParentElement(i);
        slidesContainer.appendChild(container);
        render(new Slide({
            pageNumber: i
        }).render(), container);
    }

    // Initializes fullpage
    $('#fullpage').fullpage();

    // Initializes perfect-scrollbar
    var toolbarContentContainer = document.getElementById('menu-content');
    Ps.initialize(toolbarContentContainer, {
        minScrollbarLength: '1em',
        suppressScrollX: true
    });
});
