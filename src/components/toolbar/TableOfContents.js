import React, { PropTypes } from 'react';
import SectionList from './SectionList';

/**
 * Represents the sections in the presentation
 */
const TableOfContents = ({ presentationSlide, sections }) => {
    return (
        <div id="toolbar" className="unselectable">
            <div id="menu-content">
                {sections.map(section =>
                    <SectionList
                        key={section.id}
                        presentationSlide={presentationSlide}
                        section={section}
                    />
                )}
            </div>
        </div>
    );
};

TableOfContents.propTypes = {
    presentationSlide: PropTypes.object.isRequired,
    sections: PropTypes.array.isRequired
};

export default TableOfContents;
