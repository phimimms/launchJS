import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ImplicitBindingSlide extends React.Component {
    get id() {
        return 'implicit-binding';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Implicit Binding';
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
                <div className="slide-header">Implicit Binding</div>
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
