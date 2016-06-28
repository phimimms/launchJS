'use strict';

import React from 'react';
import Slide from '../slide';

export default class PropertyAccessorsSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
        this.slideTitle = 'Property Accessors';
    }

    /**
     * Renders the slide's template.
     *
     * @return {Element}
     */
    render() {
        super.render();

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Property Accessors</div>
                <div className="slide-content">
                    <ul>
                        <li>An object's properties are accessed via <code>object.property</code> or <code>object['property']</code></li>
                        <li>Property accessors traverse the prototype chain until it finds the property (similar to scope)</li>
                        <ul>
                            <li>If the requested property is not found, it returns <code>undefined</code></li>
                            <li>For a setter: <code>obj.a = 1;</code></li>
                                <ul>
                                    <li>If the property is found on a higher prototype, it is added directly to the object</li>
                                    <li>Results in a shadowed property in the object's prototype</li>
                                </ul>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}
