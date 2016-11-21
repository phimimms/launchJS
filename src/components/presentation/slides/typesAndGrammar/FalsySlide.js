import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class FalsySlide extends React.Component {
    get id() {
        return 'falsy';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Truthy vs. Falsy';
    }

    /**
     * Instantiates the Component
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the Component
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Truthy vs. Falsy</div>
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
