import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ES6ThisSlide extends React.Component {
    get id() {
        return 'this-es6';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'ES6';
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
                <div className="slide-header">ES6 this</div>
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
