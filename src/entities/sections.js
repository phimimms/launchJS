/* The Slide Sections */

/**
 * The entity representing a section.
 * @typedef     {Object}    section
 * @property    {String}    id      The unique identifier
 * @property    {Array.<module:slide~slide>}    slides  The section's slides in presentation order
 * @property    {String}    title   The title of the section
 */

 export const SCOPE = {
     id:     'scope',
     slides: [],
     title:  'Scope'
 };

 export const THIS = {
     id:     'this',
     slides: [],
     title:  'this'
 };

export const GRAMMAR = {
     id:     'grammar',
     slides: [],
     title:  'Types & Grammar'
 };

export const PROMISE = {
    id:     'promise',
    slides: [],
    title:  'Promises'
};
