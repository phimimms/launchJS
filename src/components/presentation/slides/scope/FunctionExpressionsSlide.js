import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class FunctionExpressionsSlide extends React.Component {
    get section() {
        return sections.SCOPE;
    }
    get slide() {
        return slides.SCOPE_FUNCTION_EXPRESSIONS;
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
                        <li><code>function</code> keyword is <strong>not</strong> the first term of the statement</li>
                        <li>Named Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var foo = function bar() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE};</span>
                                </p>
                            </div>
                        <li>Anonymous Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>someElement.addEventListener({char.SQUOTE}click{char.SQUOTE}, function() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE});</span>
                                </p>
                            </div>
                            <ul><li>Cannot support recursion</li></ul>
                        <li>Immediately Invoked Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>(function foo() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE})();</span>
                                </p>
                            </div>
                            <ul><li>Does <strong>not</strong> occupy the local scope</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}

FunctionExpressionsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default FunctionExpressionsSlide;
