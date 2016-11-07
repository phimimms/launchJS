import char from '../../../../dictionary/characterCodes';
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

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Closure</div>
                <div className="slide-content">
                    <ul>
                        <li>The mapping of a function{char.RSQUOTE}s <em>free variables</em> to their value at the time of the function{char.RSQUOTE}s declaration</li>
                        <ul><li><strong>free variables:</strong> Identifiers used locally but declared in an enclosing scope</li></ul>
                        <li><strong>Be careful with callbacks!</strong></li>
                    </ul>
                    <div style={sideContainerStyle}>
                        <h2>Does Not Maintain Closure</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) {char.LBRACE}</span>
                                <span>    function bar() {char.LBRACE}</span>
                                <span>        console.log(i);</span>
                                <span>    {char.RBRACE}</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i {char.LESSTHAN} n; i++) {char.LBRACE}</span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener({char.SQUOTE}click{char.SQUOTE}, bar);</span>
                                <span>    {char.RBRACE}</span>
                                <span>{char.RBRACE})(document.getElementsByClassName({char.SQUOTE}clickable{char.SQUOTE}));</span>
                            </p>
                        </div>
                        <a href="https://jsfiddle.net/r2gx6ctv/31/" target="_blank">Live Example</a>
                    </div>
                    <div style={sideContainerStyle}>
                        <h2>Maintains <code>num</code>{char.RSQUOTE}s Value</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) {char.LBRACE}</span>
                                <span>    function bar(n) {char.LBRACE}</span>
                                <span>        console.log(n);</span>
                                <span>    {char.RBRACE}</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i {char.LESSTHAN} n; i++) {char.LBRACE}</span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener({char.SQUOTE}click{char.SQUOTE}, bar.bind(this, i));</span>
                                <span>    {char.RBRACE}</span>
                                <span>{char.RBRACE})(document.getElementsByClassName({char.SQUOTE}clickable{char.SQUOTE}));</span>
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
