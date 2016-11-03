import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class TypesIntroSlide extends React.Component {
    get id() {
        return 'types-grammar';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Introduction';
    }

    constructor(props) {
        super(props);
    }


    render() {
        const rsquote = '&#8217';

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Types & Grammar</div>
                <div className="slide-content">
                    <ul>
                        <li>Javascript is <strong>not</strong> a typed language</li>
                        <div className="code-block small">
                            <p>
                                <span>var a = 'I am a string';</span>
                                <span>a = ['Now I am an array'];</span>
                            </p>
                        </div>
                        <ul><li>Variables don{rsquote}t have types -- <em>values</em> have types</li></ul>
                        <li>Primitive Types:</li>
                            <ul>
                                <li><code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Number</code>, <code>String</code></li>
                            </ul>
                        <li>Compound Types:</li>
                            <ul>
                                <li><code>Object</code>, <code>Array</code>, <code>Function</code>, <code>Date</code>, <code>RegExp</code></li>
                            </ul>
                    </ul>
                </div>
            </div>
        );
    }
}

TypesIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default TypesIntroSlide;
