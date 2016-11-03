import React, { PropTypes } from 'react';
import SectionList from './SectionList';

const TableOfContents = ({slides}) => {
    const sections = generateSections(slides);

    return (
        <div id="toolbar" className="unselectable">
            <div id="menu-content">
                {sections.map(section =>
                    <SectionList key={section.id} section={section} />
                )}
            </div>
        </div>
    );
};

TableOfContents.propTypes = {
    slides: PropTypes.array.isRequired
};

function generateSections(slides) {
    let sections = [];
    let index = -1;
    let sectionId = null;

    slides.forEach((Slide, pageNumber) => {
        let s = new Slide({ pageNumber });

        switch (s.section.id) {
            case sectionId:
                /* Adds the slide to the current section */
                sections[index].slides.push(s);
                break;
            default:
                /* The first slide of the next section */
                sectionId = s.section.id;
                sections[++index] = Object.assign({}, s.section, {slides: [s]});
                break;
        }
    });

    return sections;
}

export default TableOfContents;
