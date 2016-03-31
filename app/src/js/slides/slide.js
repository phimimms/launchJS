'use strict';

import $ from 'jquery';
import React from 'react';

export default class Slide extends React.Component {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        /**
         * A map of all subscriptions to its events.
         *
         * @type {Object}
         * @property {Object.<Function>} callbacks A map of event names to callback functions
         * @property {Object} context The context object for the callback invocations
         * @property {Object} _events Provides a link-list of previous registration of subscriptions
         * @private
         */
        this._events = null;

        /**
         * The slide's page number.
         *
         * @type {Number}
         */
        this.pageNumber = props.pageNumber;

        /**
         * The section of the presentation to which the slide belongs.
         *
         * @abstract
         * @type {String}
         */
        this.sectionName = null;

        /**
         * The title of the slide.
         *
         * @abstract
         * @type {String}
         */
        this.slideTitle = null;
    }

    /**
     * Clears references in the instance properties.
     */
    destroy() {
        this._events = null;
    }

    /**
     * Runs the callbacks associated to the given event.
     *
     * @param {String} evt The event name
     * @param {Object} [data] The data associated to the event
     */
    emit(evt, data = {}) {
        var prev;
        var cursor = this;
        while (prev = cursor, cursor = cursor._events) {
            if (!cursor) {
                return;
            } else if (cursor.callbacks[evt]) {
                cursor.callbacks[evt].call(cursor.context, data);
            }
        }
    }

    /**
     * Unregisters subscriptions to its events.
     *
     * @param {String|Array} evt The event name OR a list of the event names
     * @param {Object} [context] The context object
     */
    off(evt, context = this) {
        if (!evt) {
            return;
        } else if (typeof evt === 'string') {
            evt = [evt];
        } else if (!Array.isArray(evt)) {
            return;
        }

        var prev;
        var cursor = this;
        while (prev = cursor, cursor = cursor._events) {
            if (!cursor) {
                return;
            } else if (cursor.context !== context) {
                continue;
            }

            for (let i = 0, n = evt.length; i < n; i++) {
                if (cursor.callbacks[evt[i]]) {
                    delete cursor.callbacks[evt[i]];
                }
            }

            if (!Object.keys(cursor.callbacks).length) {
                prev._events = cursor._events;
            }
        }
    }

    /**
     * Registers subscriptions to its events.
     *
     * @param {String|Object} evt The event name OR a map of event names to callbacks
     * @param {Function|Object} [handler] The callback OR the context object
     * @param {Object} [context] The context object
     */
    on(evt, handler, context) {
        if (!evt || Array.isArray(evt)) {
            return;
        }

        var callbacks = {};
        switch (typeof evt) {
            case 'object':
                context = handler || this;
                callbacks = evt;
                break;
            case 'string':
                if (!handler || typeof handler !== 'function') {
                    return;
                }
                context = context || this;
                callbacks[evt] = handler;
                break;
            default:
                return;
        }

        this._events = {
            callbacks: callbacks,
            context: context,
            _events: this._events
        };
    }

    /**
     * Adds a list item element to the toolbar that represent this slide.
     */
    render() {
        var listContainer = document.getElementById('list-' + this.sectionName);
        if (!listContainer) {
            let toolbarContentContainer = document.getElementById('menu-content');

            let toolbarMenuContainer = document.createElement('h2');
            toolbarMenuContainer.id = 'menu-' + this.sectionName;
            toolbarMenuContainer.innerHTML = this.sectionName;

            listContainer = document.createElement('ul');
            listContainer.id = 'list-' + this.sectionName;

            toolbarMenuContainer.appendChild(listContainer);
            toolbarContentContainer.appendChild(toolbarMenuContainer);
        }

        var listItemElement = document.createElement('li');
        listItemElement.innerHTML = this.slideTitle;
        listItemElement.addEventListener('click', function() {
            if ($.fn.fullpage) {
                $.fn.fullpage.moveTo('slides', this.pageNumber);
            }
        }.bind(this));

        listContainer.appendChild(listItemElement);
    }
}
