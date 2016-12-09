import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class FalsySlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_FALSY;
    }

    /**
     * Instantiates the component.
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the component.
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <ul>
                        <li>Falsy values:</li>
                        <ul>
                            <li><code>undefined</code></li>
                            <li><code>null</code></li>
                            <li><code>false</code></li>
                            <li><code>+0</code></li>
                            <li><code>-0</code></li>
                            <li><code>NaN</code></li>
                        </ul>
                        <li>Anything <strong>not</strong> explicitly on the falsy list is <em>truthy</em></li>
                    </ul>
                </div>
            </div>
        );
    }
}

FalsySlide.propTypes = {
    pageNumber: PropTypes.number
};

export default FalsySlide;
