import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class ImplicitBindingSlide extends React.Component {
    get section() {
        return sections.THIS;
    }
    get slide() {
        return slides.THIS_IMPLICIT_BINDING;
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
                        <li>Invoked with an object for a function reference</li>
                        <div className="code-block">
                            <p>
                                <span>var foo = {char.LBRACE}</span>
                                <span>    bar: function() {char.LBRACE}</span>
                                <span>        console.log(this); {char.COMMENT} foo</span>
                                <span>    {char.RBRACE}</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>foo.bar();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ImplicitBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ImplicitBindingSlide;
