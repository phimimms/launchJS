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
//import PromisesIntroSlide from '../components/presentation/slides/promises/PromisesIntroSlide';

/**
 * Gets a list of the slide components in their presentation order
 * @return {Promise}
 */
export function getSlides() {
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
            PromisesIntroSlide
            */
        ]);
    });
}
