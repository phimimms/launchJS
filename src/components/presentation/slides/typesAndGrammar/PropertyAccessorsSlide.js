import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class PropertyAccessorsSlide extends React.Component {
    get id() {
        return 'property-accessors';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Property Accessors';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Property Accessors</div>
                <div className="slide-content">
                    <ul>
                        <li>An object{char.RSQUOTE}s properties are accessed via <code>object.property</code> or <code>object[{char.SQUOTE}property{char.SQUOTE}]</code></li>
                        <li>Property accessors traverse the prototype chain until it finds the property (similar to scope)</li>
                        <ul>
                            <li>If the requested property is not found, it returns <code>undefined</code></li>
                            <li>For a setter: <code>obj.a = 1;</code></li>
                                <ul>
                                    <li>If the property is found on a higher prototype, it is added directly to the object</li>
                                    <li>Results in a shadowed property in the object{char.RSQUOTE}s prototype</li>
                                </ul>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}

PropertyAccessorsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PropertyAccessorsSlide;
