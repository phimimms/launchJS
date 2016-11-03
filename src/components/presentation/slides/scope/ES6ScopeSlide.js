import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ES6ScopeSlide extends React.Component {
    get id() {
        return 'scope-es6';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'ES6';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">ES6 Scope</div>
                <div className="slide-content">
                    <ul>
                        <li><strong>Block</strong> scoped variable declaration keywords: <code>let</code> & <code>const</code></li>
                        <div className="code-block small">
                            <p>
                                <span></span>
                                <span>(function() &#123;</span>
                                <span>    let a = 1; // No different than 'var'</span>
                                <span>    if (a) &#123;</span>
                                <span>        let b = 2;</span>
                                <span>    &#125;</span>
                                <span>    console.log(b); // Reference Error!</span>
                                <span>    const c = 3;</span>
                                <span>    c++; // Type Error!</span>
                                <span>&#125;)();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ES6ScopeSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ES6ScopeSlide;
