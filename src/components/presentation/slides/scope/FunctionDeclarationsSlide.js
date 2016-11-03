import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class FunctionDeclarationsSlide extends React.Component {
    get id() {
        return 'function-declarations';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return  'Function Declarations';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Function Declarations</div>
                <div className="slide-content">
                    <ul>
                        <li>A named function indentifier without a variable assignment</li>
                            <ul><li><code>function</code> keyword is the first term of the statement</li></ul>
                            <div className="code-block smaller">
                                <p>
                                    <span>function foo() &#123;</span>
                                    <span>    ...</span>
                                    <span>&#125;</span>
                                </p>
                            </div>
                        <li>Function declarations are <strong>always</strong> hoisted</li>
                        <div className="code-block smaller">
                            <p>
                                <span>function foo() &#123;</span>
                                <span>    function bar() &#123;</span>
                                <span>        return 1;</span>
                                <span>    &#125;</span>
                                <span>    return bar();</span>
                                <span> </span>
                                <span>    function bar() &#123;</span>
                                <span>        return 2;</span>
                                <span>    &#125;</span>
                                <span>&#125;</span>
                                <span>console.log(foo()); // 2</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

FunctionDeclarationsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default FunctionDeclarationsSlide;
