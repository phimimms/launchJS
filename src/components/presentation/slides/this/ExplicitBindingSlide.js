import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ExplicitBindingSlide extends React.Component {
    get id() {
        return 'explicit-binding';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Explicit Binding';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Explicit Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with a specified object as the context via <code>call()</code> or <code>apply()</code></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = &#123; &#125;;</span>
                                <span>var foo = function() &#123;</span>
                                <span>    console.log(this); // obj1</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo.call(obj1);</span>
                            </p>
                        </div>
                        <li>Hard Biding: <code>bind()</code> returns a new function that calls the original function with the specified object as the <code>this</code> context</li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = &#123; &#125;;</span>
                                <span> </span>
                                <span>var foo = function() &#123;</span>
                                <span>    console.log(this); // obj1</span>
                                <span>&#125;.bind(obj1);</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ExplicitBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ExplicitBindingSlide;
