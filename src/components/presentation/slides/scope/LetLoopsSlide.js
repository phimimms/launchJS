import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class LetLoopsSlide extends React.Component {
    get section() {
        return sections.SCOPE;
    }
    get slide() {
        return slides.SCOPE_LET_LOOPS;
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
                    <li>The identifier is scoped to the loop{char.RSQUOTE}s braces</li>
                    <div className="code-block small">
                        <p>
                            <span>for (let i = 0; i {char.LESSTHAN} 5; i++) {char.LBRACE}</span>
                            <span>    ...</span>
                            <span>{char.RBRACE}</span>
                            <span>console.log(i); {char.COMMENT} Reference Error!</span>
                        </p>
                    </div>
                    <li>Creates closure <strong>per</strong> iteration</li>
                    <div className="code-block small">
                        <p>
                            <span>(function foo(elements) {char.LBRACE}</span>
                            <span>    for (let i = 0, n = elements.length; i {char.COMMENT} n; i++) {char.LBRACE}</span>
                            <span>        elements[i]</span>
                            <span>            .addEventListener({char.SQUOTE}click{char.SQUOTE}, function() {char.LBRACE}</span>
                            <span>                console.log(i);</span>
                            <span>        {char.RBRACE});</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE})(document.getElementsByClassName({char.SQUOTE}clickable{char.SQUOTE}));</span>
                        </p>
                    </div>
                </ul>
                </div>
            </div>
        );
    }
}

LetLoopsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default LetLoopsSlide;
