import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class ScopeIQSlide extends React.Component {
    get section() {
        return sections.SCOPE;
    }
    get slide() {
        return slides.SCOPE_IQ;
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
                    <div className="code-block">
                        <p>
                            <span>(function foo() {char.LBRACE}</span>
                            <span>    function bar() {char.LBRACE}</span>
                            <span>        i = 3;</span>
                            <span>    {char.RBRACE}</span>
                            <span> </span>
                            <span>    for (var i = 0; i {char.LESSTHAN} 5; i++) {char.LBRACE}</span>
                            <span>        bar();</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE})();</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ScopeIQSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ScopeIQSlide;
