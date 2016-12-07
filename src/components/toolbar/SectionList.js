import React, { PropTypes } from 'react';
import SlideListing from './SlideListing';

/**
 * Represents a Slide Section in the Toolbar
 */
const SectionList = ({presentationSlide, section}) => {
    return (
        <div>
            <h2 id={'menu-' + section.id}>{section.title}</h2>
            <ul className={'list-' + section.id}>
                {section.slides.map((s) =>
                    <SlideListing key={s.slide.id} s={s} isSelected={presentationSlide.id === s.slide.id} />
                )}
            </ul>
        </div>
    );
};

SectionList.propTypes = {
    presentationSlide: PropTypes.object.isRequired,
    section: PropTypes.object.isRequired
};

export default SectionList;
