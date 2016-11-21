import React, { PropTypes } from 'react';
import SlideListing from './SlideListing';

/**
 * Represents a Slide Section in the Toolbar
 */
const SectionList = ({section}) => {
    return (
        <div>
            <h2 id={'menu-' + section.id}>{section.title}</h2>
            <ul className={'list-' + section.id}>
                {section.slides.map((slide) =>
                    <SlideListing key={slide.id} slide={slide} />
                )}
            </ul>
        </div>
    );
};

SectionList.propTypes = {
    section: PropTypes.object.isRequired
};

export default SectionList;
