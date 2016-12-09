import $ from 'jquery';
import React, { PropTypes } from 'react';

/**
 * Represents a Slide in the Toolbar
 */
const SlideListing = ({ isSelected, slide }) => {
    const selectSlide = () => {
        if ($.fn.fullpage) {
            $.fn.fullpage.moveTo('slides', slide.pageNumber);
        }
    };

    return (
        <li
            className={`${isSelected ? 'selected': ''}`}
            onClick={selectSlide}>{slide.title}
        </li>
    );
};

SlideListing.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    slide: PropTypes.object.isRequired
};

export default SlideListing;
