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
import FunctionDeclarationsSlide from './js/slides/scope/functionDeclarations';
import FunctionExpressionsSlide from './js/slides/scope/functionExpressions';
import ClosureSlide from './js/slides/scope/closure';
import ScopeIQSlide from './js/slides/scope/scopeIQ';
import ES6ScopeSlide from './js/slides/scope/es6Scope';
import LetLoopsSlide from './js/slides/scope/letLoops';
import ThisIntroSlide from './js/slides/this/thisIntro';
import DefaultBindingSlide from './js/slides/this/defaultBinding';
import ImplicitBindingSlide from './js/slides/this/implicitBinding';
import ExplicitBindingSlide from './js/slides/this/explicitBinding';
import NewBindingSlide from './js/slides/this/newBinding';
import ThisIQSlide from './js/slides/this/thisIQ';
import ES6ThisSlide from './js/slides/this/es6This';
import TypesIntroSlide from './js/slides/typesAndGrammar/typesIntro';
import CoercionSlide from './js/slides/typesAndGrammar/coercion';
import FalsySlide from './js/slides/typesAndGrammar/falsy';
import EqualityOperatorsSlide from './js/slides/typesAndGrammar/equalityOperators';
import ConditionalOperatorsSlide from './js/slides/typesAndGrammar/conditionalOperators';
import PassingParametersSlide from './js/slides/typesAndGrammar/passingParameters';
import GetterSettersSlide from './js/slides/typesAndGrammar/gettersSetters';
import PrototypesSlide from './js/slides/typesAndGrammar/prototypes';
import PropertyAccessorsSlide from './js/slides/typesAndGrammar/propertyAccessors';
import TypesIQSlide from './js/slides/typesAndGrammar/typesIQ';

$(document).ready(function() {
    var slidesContainer = document.getElementById('slides');

    var createSlideParentElement = function(index) {
        var el = document.createElement('div');
        el.id = 'section' + index;
        el.className = 'slide';

        return el;
    };

    const Slides = [
        //IntroSlide,
        //ResourcesSlide,
        ScopeIntroSlide,
        UndeclaredVariablesSlide,
        HoistingSlide,
        FunctionDeclarationsSlide,
        FunctionExpressionsSlide,
        ClosureSlide,
        ScopeIQSlide,
        ES6ScopeSlide,
        LetLoopsSlide,
        ThisIntroSlide,
        DefaultBindingSlide,
        ImplicitBindingSlide,
        ExplicitBindingSlide,
        NewBindingSlide,
        ThisIQSlide,
        ES6ThisSlide,
        TypesIntroSlide,
        CoercionSlide,
        FalsySlide,
        EqualityOperatorsSlide,
        ConditionalOperatorsSlide,
        PassingParametersSlide,
        GetterSettersSlide,
        PrototypesSlide,
        PropertyAccessorsSlide,
        TypesIQSlide
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
