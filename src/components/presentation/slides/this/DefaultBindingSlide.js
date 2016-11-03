import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class DefaultBindingSlide extends React.Component {
    get id() {
        return 'default-binding';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Default Binding';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Default Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with a plain, undecorated function reference</li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() &#123;</span>
                                <span>    console.log(this); // global object (window)</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                        <li>If the contents of the invoked function include <code>'use strict';</code>, then <code>this</code> will be <code>undefined</code></li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() &#123;</span>
                                <span>    'use strict';</span>
                                <span>    console.log(this); // undefined</span>
                                <span>&#125;;</span>
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

DefaultBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default DefaultBindingSlide;
