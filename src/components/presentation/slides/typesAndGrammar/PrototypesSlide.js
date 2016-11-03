import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class PrototypesSlide extends React.Component {
    get id() {
        return 'prototypes';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Object Prototypes';
    }

    constructor(props) {
        super(props);
    }

    render() {
        const rsquote = '&#8217';

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Object Prototypes</div>
                <div className="slide-content">
                    <ul>
                        <li>A prototype links an object to another object</li>
                        <li>All compound types have the <code>Object</code> prototype in their prototype chain</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj = &#123; a: 1 &#125;;</span>
                                <span>//  obj: &#123; a: 1 &#125; ---> Object.prototype ---> null</span>
                                <span>var arr = [1];</span>
                                <span>//  arr: [1] ---> Array.prototype ---> Object.prototype --> null</span>
                            </p>
                        </div>
                        <li><code>Object.create()</code> returns a new object that{rsquote}s prototype-linked to the specified object</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = &#123; a: 1 &#125;;</span>
                                <span>var obj2 = Object.create(obj1);</span>
                                <span>console.log(obj2.a); // 1</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

PrototypesSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PrototypesSlide;
