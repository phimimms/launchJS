import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class GrammarIQSlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_IQ;
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
                    <div className="code-block smaller">
                        <p>
                            <span>var obj1 = {char.LBRACE}</span>
                            <span>    get a() {char.LBRACE}</span>
                            <span>        return this.b;</span>
                            <span>    {char.RBRACE},</span>
                            <span>    set a(num) {char.LBRACE}</span>
                            <span>        this.b = num;</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE};</span>
                            <span> </span>
                            <span>var obj2 = Object.create(obj1);</span>
                            <span>obj2.a = 1;</span>
                            <span> </span>
                            <span>console.log(obj1.a); {char.COMMENT} ?</span>
                            <span>console.log(obj2.a); {char.COMMENT} ?</span>
                            <span> </span>
                            <span>var obj3 = Object.create(obj2);</span>
                            <span> </span>
                            <span>obj2.a = 2;</span>
                            <span> </span>
                            <span>console.log(obj2.a); {char.COMMENT} ?</span>
                            <span>console.log(obj3.a); {char.COMMENT} ?</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

GrammarIQSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default GrammarIQSlide;
