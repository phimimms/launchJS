import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class LetLoopsSlide extends React.Component {
    get id() {
        return 'let-loops';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Let Loops';
    }

    constructor(props) {
        super(props);
    }

    render() {
        const rsquote = '&#8217';

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Let Loops</div>
                <div className="slide-content">
                <ul>
                    <li>The identifier is scoped to the loop{rsquote}s braces</li>
                    <div className="code-block small">
                        <p>
                            <span>for (let i = 0; i &#60; 5; i++) &#123;</span>
                            <span>    ...</span>
                            <span>&#125;</span>
                            <span>console.log(i); // Reference Error!</span>
                        </p>
                    </div>
                    <li>Creates closure <strong>per</strong> iteration</li>
                    <div className="code-block small">
                        <p>
                            <span>(function foo(elements) &#123;</span>
                            <span>    for (let i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                            <span>        elements[i]</span>
                            <span>            .addEventListener('click', function() &#123;</span>
                            <span>                console.log(i);</span>
                            <span>        &#125;);</span>
                            <span>    &#125;</span>
                            <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                        </p>
                    </div>
                </ul>
                </div>
            </div>
        );
    }
}

LetLoopsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default LetLoopsSlide;
