import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ClosureSlide extends React.Component {
    get id() {
        return 'closure';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Closure';
    }

    constructor(props) {
        super(props);
    }

    render() {
        const sideContainerStyle = {
            float: 'left',
            width: '50%'
        };

        const rsquote = '&#8217';

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Closure</div>
                <div className="slide-content">
                    <ul>
                        <li>The mapping of a function's <em>free variables</em> to their value at the time of the function's declaration</li>
                        <ul><li><strong>free variables:</strong> Identifiers used locally but declared in an enclosing scope</li></ul>
                        <li><strong>Be careful with callbacks!</strong></li>
                    </ul>
                    <div style={sideContainerStyle}>
                        <h2>Does Not Maintain Closure</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) &#123;</span>
                                <span>    function bar() &#123;</span>
                                <span>        console.log(i);</span>
                                <span>    &#125;</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener('click', bar);</span>
                                <span>    &#125;</span>
                                <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                            </p>
                        </div>
                        <a href="https://jsfiddle.net/r2gx6ctv/31/" target="_blank">Live Example</a>
                    </div>
                    <div style={sideContainerStyle}>
                        <h2>Maintains <code>num</code>{rsquote}s Value</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) &#123;</span>
                                <span>    function bar(n) &#123;</span>
                                <span>        console.log(n);</span>
                                <span>    &#125;</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener('click', bar.bind(this, i));</span>
                                <span>    &#125;</span>
                                <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                            </p>
                        </div>
                        <a href="https://jsfiddle.net/r2gx6ctv/32/" target="_blank">Live Example</a>
                    </div>
                </div>
            </div>
        );
    }
}

ClosureSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ClosureSlide;
