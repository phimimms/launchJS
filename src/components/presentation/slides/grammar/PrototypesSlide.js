import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class PrototypesSlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_PROTOTYPES;
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
                        <li>A prototype links an object to another object</li>
                        <li>All compound types have the <code>Object</code> prototype in their prototype chain</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj = {char.LBRACE} a: 1 {char.RBRACE};</span>
                                <span>{char.COMMENT}  obj: {char.LBRACE} a: 1 {char.RBRACE} ---> Object.prototype ---> null</span>
                                <span>var arr = [1];</span>
                                <span>{char.COMMENT}  arr: [1] ---> Array.prototype ---> Object.prototype --> null</span>
                            </p>
                        </div>
                        <li><code>Object.create()</code> returns a new object that{char.RSQUOTE}s prototype-linked to the specified object</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = {char.LBRACE} a: 1 {char.RBRACE};</span>
                                <span>var obj2 = Object.create(obj1);</span>
                                <span>console.log(obj2.a); {char.COMMENT} 1</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

PrototypesSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PrototypesSlide;
