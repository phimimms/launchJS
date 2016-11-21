import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class NewBindingSlide extends React.Component {
    get id() {
        return 'new-binding';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'new Binding';
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
                <div className="slide-header">new Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked as a construction call of the function</li>
                        <ul>
                            <li>The new object being constructed is set as the <code>this</code> context</li>
                            <li>The constructed object is automatically returned unless the function specifies a return statement</li>
                        </ul>
                        <div className="code-block small">
                            <p>
                                <span>var Foo = function() {char.LBRACE}</span>
                                <span>    this.a = 1;</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>var obj = new Foo();</span>
                                <span>console.log(obj); {char.COMMENT} {char.LBRACE} a: 1 {char.RBRACE}</span>
                            </p>
                        </div>
                        <li><strong>Binding Priority:</strong> <code>new</code> {char.GREATERTHAN} hard {char.GREATERTHAN} explicit {char.GREATERTHAN} implicit {char.GREATERTHAN} default</li>
                    </ul>
                </div>
            </div>
        );
    }
}

NewBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default NewBindingSlide;
