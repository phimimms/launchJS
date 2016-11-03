import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ImplicitBindingSlide extends React.Component {
    get id() {
        return 'implicit-binding';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Implicit Binding';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Implicit Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with an object for a function reference</li>
                        <div className="code-block">
                            <p>
                                <span>var foo = &#123;</span>
                                <span>    bar: function() &#123;</span>
                                <span>        console.log(this); // foo</span>
                                <span>    &#125;</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo.bar();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ImplicitBindingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ImplicitBindingSlide;
