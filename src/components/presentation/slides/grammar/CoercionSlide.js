import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class CoercionSlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_COERCION;
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
                        <li>Implicit conversion of one type to another</li>
                        <li><strong>Always</strong> results to a primitive type</li>
                        <li>String to Number:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = {char.SQUOTE}15{char.SQUOTE};</span>
                                    <span>console.log(+a);     {char.COMMENT} 15</span>
                                    <span>console.log(+a + 1); {char.COMMENT} 16</span>
                                </p>
                            </div>
                        <li>Number to String:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(a + {char.SQUOTE}{char.SQUOTE});  {char.COMMENT} {char.SQUOTE}15{char.SQUOTE}</span>
                                    <span>console.log(a + {char.SQUOTE}1{char.SQUOTE}); {char.COMMENT} {char.SQUOTE}151{char.SQUOTE}</span>
                                </p>
                            </div>
                        <li>Anything to Boolean:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(!a);  {char.COMMENT} false</span>
                                    <span>console.log(!!a); {char.COMMENT} true</span>
                                </p>
                            </div>
                    </ul>
                </div>
            </div>
        );
    }
}

CoercionSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default CoercionSlide;
