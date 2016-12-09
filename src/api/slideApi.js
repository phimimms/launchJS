import * as slides from '../entities/slides';

/* The Slide Components */
import ScopeIntroSlide from '../components/presentation/slides/scope/ScopeIntroSlide';
import UndeclaredVariablesSlide from '../components/presentation/slides/scope/UndeclaredVariablesSlide';
import HoistingSlide from '../components/presentation/slides/scope/HoistingSlide';
import FunctionDeclarationsSlide from '../components/presentation/slides/scope/FunctionDeclarationsSlide';
import FunctionExpressionsSlide from '../components/presentation/slides/scope/FunctionExpressionsSlide';
import ClosureSlide from '../components/presentation/slides/scope/ClosureSlide';
import ScopeIQSlide from '../components/presentation/slides/scope/ScopeIQSlide';
import ES6ScopeSlide from '../components/presentation/slides/scope/ES6ScopeSlide';
import LetLoopsSlide from '../components/presentation/slides/scope/LetLoopsSlide';
import ThisIntroSlide from '../components/presentation/slides/this/ThisIntroSlide';
import DefaultBindingSlide from '../components/presentation/slides/this/DefaultBindingSlide';
import ImplicitBindingSlide from '../components/presentation/slides/this/ImplicitBindingSlide';
import ExplicitBindingSlide from '../components/presentation/slides/this/ExplicitBindingSlide';
import NewBindingSlide from '../components/presentation/slides/this/NewBindingSlide';
import ThisIQSlide from '../components/presentation/slides/this/ThisIQSlide';
import ES6ThisSlide from '../components/presentation/slides/this/ES6ThisSlide';
import GrammarIntroSlide from '../components/presentation/slides/grammar/GrammarIntroSlide';
import CoercionSlide from '../components/presentation/slides/grammar/CoercionSlide';
import FalsySlide from '../components/presentation/slides/grammar/FalsySlide';
import EqualityOperatorsSlide from '../components/presentation/slides/grammar/EqualityOperatorsSlide';
import ConditionalOperatorsSlide from '../components/presentation/slides/grammar/ConditionalOperatorsSlide';
import PassingParametersSlide from '../components/presentation/slides/grammar/PassingParametersSlide';
import GettersSettersSlide from '../components/presentation/slides/grammar/GettersSettersSlide';
import PrototypesSlide from '../components/presentation/slides/grammar/PrototypesSlide';
import PropertyAccessorsSlide from '../components/presentation/slides/grammar/PropertyAccessorsSlide';
import GrammarIQSlide from '../components/presentation/slides/grammar/GrammarIQSlide';
//import PromiseIntroSlide from '../components/presentation/slides/promise/PromiseIntroSlide';

/**
 * The slides in presentation order.
 * @type {Array.<module:slide~slide>}
 */
const presentationSlides = [
    /* Scope */
    slides.SCOPE_INTRO, slides.SCOPE_UNDECLARED_VARIABLES, slides.SCOPE_HOISTING,
    slides.SCOPE_FUNCTION_DECLARATIONS, slides.SCOPE_FUNCTION_EXPRESSIONS,
    slides.SCOPE_CLOSURE, slides.SCOPE_IQ, slides.SCOPE_ES6, slides.SCOPE_LET_LOOPS,
    /* this */
    slides.THIS_INTRO, slides.THIS_DEFAULT_BINDING, slides.THIS_IMPLICIT_BINDING,
    slides.THIS_EXPLICIT_BINDING, slides.THIS_NEW_BINDING, slides.THIS_IQ,
    slides.THIS_ES6,
    /* Grammar */
    slides.GRAMMAR_INTRO, slides.GRAMMAR_COERCION, slides.GRAMMAR_FALSY,
    slides.GRAMMAR_EQUALITY_OPERATORS, slides.GRAMMAR_CONDITIONAL_OPERATORS,
    slides.GRAMMAR_PASSING_PARAMETERS, slides.GRAMMAR_GETTERS_SETTERS,
    slides.GRAMMAR_PROTOTYPES, slides.GRAMMAR_PROPERTY_ACCESSORS,
    slides.GRAMMAR_IQ
];

/**
 * Gets a list of the sections in presentation order.
 * @return {Promise}
 */
export function getSlidesBySection() {
    return new Promise((fulfill) => {
        let sections = [],
            index = -1,
            sectionId = null;

        presentationSlides.forEach((slide, pageNumber) => {
            /* Dereferences entity */
            slide = Object.assign({}, slide);
            slide.pageNumber = pageNumber;

            switch (slide.section.id) {
                case sectionId:
                    /* Adds the slide to the current section */
                    sections[index].slides.push(slide);
                    break;
                default:
                    /* Adds the first slide of the next section */
                    sectionId = slide.section.id;
                    sections[++index] = Object.assign({}, slide.section, {slides: [slide]});
                    break;
            }
        });

        fulfill(sections);
    });
}

/**
 * Gets the slide corresponding to the given page number.
 * @param   {Number}    pageNumber  The page number of the requested slide
 * @return  {Promise}
 */
export function getSlideByPageNumber(pageNumber) {
    return new Promise((fulfill) => {
        fulfill(Object.assign({}, presentationSlides[pageNumber]));
    });
}

/**
 * Gets a list of the slide components in presentation order.
 * @return {Promise}
 */
export function getSlideComponents() {
    return new Promise((fulfill) => {
        fulfill([
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
            GrammarIntroSlide,
            CoercionSlide,
            FalsySlide,
            EqualityOperatorsSlide,
            ConditionalOperatorsSlide,
            PassingParametersSlide,
            GettersSettersSlide,
            PrototypesSlide,
            PropertyAccessorsSlide,
            GrammarIQSlide/*,
            PromiseIntroSlide
            */
        ]);
    });
}
