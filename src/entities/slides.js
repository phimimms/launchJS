/* The Presentation Slides */
import * as sections from './sections';

/**
 * The entity representing a slide.
 * @typedef     {Object}    slide
 * @property    {String}    id          The unique identifier
 * @property    {Number}    pageNumber  The page number of the slide
 * @property    {module:section~section}    section     The slide's section
 * @property    {String}    title       The title of the slide
 */

/* Scope */
export const SCOPE_INTRO = {
    id :    'scope-intro',
    section: sections.SCOPE,
    title:  'Scope'
};

export const SCOPE_UNDECLARED_VARIABLES = {
    id:     'undeclared-variables',
    section: sections.SCOPE,
    title:  'Undeclared Variables'
};

export const SCOPE_HOISTING = {
    id:     'hoisting',
    section: sections.SCOPE,
    title:  'Hoisting'
};

export const SCOPE_FUNCTION_DECLARATIONS = {
    id:     'function-declarations',
    section: sections.SCOPE,
    title:  'Function Declarations'
};

export const SCOPE_FUNCTION_EXPRESSIONS = {
    id:     'function-expressions',
    section: sections.SCOPE,
    title:  'Function Expressions'
};

export const SCOPE_CLOSURE = {
    id:     'closure',
    section: sections.SCOPE,
    title:  'Closure'
};

export const SCOPE_IQ = {
    id:     'scope-iq',
    section: sections.SCOPE,
    title:  'Interview Question'
};

export const SCOPE_ES6 = {
    id:     'scope-es6',
    section: sections.SCOPE,
    title:  'ES6 Scope'
};

export const SCOPE_LET_LOOPS = {
    id:     'let-loops',
    section: sections.SCOPE,
    title:  'Let Loops'
};

/* this */
export const THIS_INTRO = {
    id:     'this-intro',
    section: sections.THIS,
    title:  'this'
};

export const THIS_DEFAULT_BINDING = {
    id:     'default-binding',
    section: sections.THIS,
    title:  'Default Binding'
};

export const THIS_IMPLICIT_BINDING = {
    id:     'implicit-binding',
    section: sections.THIS,
    title:  'Implicit Binding'
};

export const THIS_EXPLICIT_BINDING = {
    id:     'explicit-binding',
    section: sections.THIS,
    title:  'Explicit Binding'
};

export const THIS_NEW_BINDING = {
    id:     'new-binding',
    section: sections.THIS,
    title:  'new Binding'
};

export const THIS_IQ = {
    id:     'this-iq',
    section: sections.THIS,
    title:  'Interview Question'
};

export const THIS_ES6 = {
    id:     'this-es6',
    section: sections.THIS,
    title:  'ES6 this'
};

/* Types & Grammar */
export const GRAMMAR_INTRO = {
    id:     'types-grammar',
    section: sections.GRAMMAR,
    title:  'Types & Grammar'
};

export const GRAMMAR_COERCION = {
    id:     'coercion',
    section: sections.GRAMMAR,
    title:  'Coercion'
};

export const GRAMMAR_FALSY = {
    id:     'falsy',
    section: sections.GRAMMAR,
    title:  'Truthy vs. Falsy'
};

export const GRAMMAR_EQUALITY_OPERATORS = {
    id:     'equality-operators',
    section: sections.GRAMMAR,
    title:  'Equality Operators'
};

export const GRAMMAR_CONDITIONAL_OPERATORS = {
    id:     'conditional-operators',
    section: sections.GRAMMAR,
    title:  'Conditional Operators'
};

export const GRAMMAR_PASSING_PARAMETERS = {
    id:     'passing-parameters',
    section: sections.GRAMMAR,
    title:  'Passing Parameters'
};

export const GRAMMAR_GETTERS_SETTERS = {
    id:     'getters-and-setters',
    section: sections.GRAMMAR,
    title:  'Getters & Setters'
};

export const GRAMMAR_PROTOTYPES = {
    id:     'prototypes',
    section: sections.GRAMMAR,
    title:  'Object Prototypes'
};

export const GRAMMAR_PROPERTY_ACCESSORS = {
    id:     'property-accessors',
    section: sections.GRAMMAR,
    title:  'Property Accessors'
};

export const GRAMMAR_IQ = {
    id:     'types-iq',
    section: sections.GRAMMAR,
    title:  'Interview Question'
};

/* Promise */
export const PROMISE_INTRO = {
    id:     'promise-intro',
    section: sections.PROMISE,
    title:  'Promises'
};
