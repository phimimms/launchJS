import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class ES6ScopeSlide extends React.Component {
    get section() {
        return sections.SCOPE;
    }
    get slide() {
        return slides.SCOPE_ES6;
    }

    /**
     * Instantiates the component.
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the component.
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <ul>
                        <li><strong>Block</strong> scoped variable declaration keywords: <code>let</code> & <code>const</code></li>
                        <div className="code-block small">
                            <p>
                                <span></span>
                                <span>(function() {char.LBRACE}</span>
                                <span>    let a = 1; {char.COMMENT} No different than {char.SQUOTE}var{char.SQUOTE}</span>
                                <span>    if (a) {char.LBRACE}</span>
                                <span>        let b = 2;</span>
                                <span>    {char.RBRACE}</span>
                                <span>    console.log(b); {char.COMMENT} Reference Error!</span>
                                <span>    const c = 3;</span>
                                <span>    c++; {char.COMMENT} Type Error!</span>
                                <span>{char.RBRACE})();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ES6ScopeSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ES6ScopeSlide;
