import * as presentationActions from '../../actions/presentationActions';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../../actions/slideActions';
import TableOfContents from './TableOfContents';

/**
 * The Toolbar Component
 */
class Toolbar extends React.Component {
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
        const { presentation, slides } = this.props;

        return (
            <TableOfContents presentationSlide={presentation.slide} slides={slides} />
        );
    }
}

Toolbar.propTypes = {
    actions: PropTypes.object.isRequired,
    presentation: PropTypes.object.isRequired,
    slides: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        presentation: state.presentation,
        slides: state.slides
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(slideActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
