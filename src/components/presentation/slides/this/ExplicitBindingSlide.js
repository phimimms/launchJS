import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class ExplicitBindingSlide extends React.Component {
    get section() {
        return sections.THIS;
    }
    get slide() {
        return slides.THIS_EXPLICIT_BINDING;
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
                        <li>Invoked with a specified object as the context via <code>call()</code> or <code>apply()</code></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = {char.LBRACE} {char.RBRACE};</span>
                                <span>var foo = function() {char.LBRACE}</span>
                                <span>    console.log(this); {char.COMMENT} obj1</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>foo.call(obj1);</span>
                            </p>
                        </div>
                        <li>Hard Biding: <code>bind()</code> returns a new function that calls the original function with the specified object as the <code>this</code> context</li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = {char.LBRACE} {char.RBRACE};</span>
                                <span> </span>
                                <span>var foo = function() {char.LBRACE}</span>
                                <span>    console.log(this); {char.COMMENT} obj1</span>
                                <span>{char.RBRACE}.bind(obj1);</span>
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

ExplicitBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ExplicitBindingSlide;
