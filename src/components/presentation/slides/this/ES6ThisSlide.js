import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class ES6ThisSlide extends React.Component {
    get section() {
        return sections.THIS;
    }
    get slide() {
        return slides.THIS_ES6;
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
                        <li>Arrow-functions adopt the <code>this</code> binding from the enclosing scope</li>
                        <ul><li>Cannot be overridden (even with <code>new</code> binding)</li></ul>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = {char.LBRACE} {char.RBRACE};</span>
                                <span>var obj2 = {char.LBRACE} {char.RBRACE};</span>
                                <span> </span>
                                <span>(function() {char.LBRACE}</span>
                                <span>    console.log(this); {char.COMMENT} obj1;</span>
                                <span> </span>
                                <span>    var foo = () => {char.LBRACE}</span>
                                <span>        console.log(this); {char.COMMENT} obj1;</span>
                                <span>    {char.RBRACE}.bind(obj2);</span>
                                <span> </span>
                                <span>    foo.call(obj2);</span>
                                <span>{char.RBRACE}.bind(obj1))();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ES6ThisSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ES6ThisSlide;
