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
import ThisIntroSlide from './js/slides/this/thisIntro';
import DefaultBindingSlide from './js/slides/this/defaultBinding';
import ImplicitBindingSlide from './js/slides/this/implicitBinding';
import ExplicitBindingSlide from './js/slides/this/explicitBinding';
import newBindingSlide from './js/slides/this/newBinding';
import ThisIQSlide from './js/slides/this/thisIQ';
import ES6ThisSlide from './js/slides/this/es6This';
import TypesIntroSlide from './js/slides/types/typesIntro';
import PassingParametersSlide from './js/slides/types/passingParameters';
import getterSettersSlide from './js/slides/types/gettersSetters';
import PrototypesSlide from './js/slides/types/prototypes';
import PropertyAccessorsSlide from './js/slides/types/propertyAccessors';
import typesIQSlide from './js/slides/types/typesIQ';

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
        ES6ScopeSlide,
        ThisIntroSlide,
        DefaultBindingSlide,
        ImplicitBindingSlide,
        ExplicitBindingSlide,
        newBindingSlide,
        ThisIQSlide,
        ES6ThisSlide,
        TypesIntroSlide,
        PassingParametersSlide,
        getterSettersSlide,
        PrototypesSlide,
        PropertyAccessorsSlide,
        typesIQSlide
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
