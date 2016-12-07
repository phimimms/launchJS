import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class DefaultBindingSlide extends React.Component {
    get section() {
        return sections.THIS;
    }
    get slide() {
        return slides.THIS_DEFAULT_BINDING;
    }

    /**
     * Instantiates the Component
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the Component
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with a plain, undecorated function reference</li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() {char.LBRACE}</span>
                                <span>    console.log(this); {char.COMMENT} global object (window)</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                        <li>If the contents of the invoked function include <code>{char.SQUOTE}use strict{char.SQUOTE};</code>, then <code>this</code> will be <code>undefined</code></li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() {char.LBRACE}</span>
                                <span>    {char.SQUOTE}use strict{char.SQUOTE};</span>
                                <span>    console.log(this); {char.COMMENT} undefined</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

DefaultBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default DefaultBindingSlide;
