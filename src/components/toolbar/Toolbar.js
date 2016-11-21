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
        const { slides } = this.props;

        return (
            <TableOfContents slides={slides} />
        );
    }
}

Toolbar.propTypes = {
    actions: PropTypes.object.isRequired,
    slides: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        slides: state.slides
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(slideActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
