import '../scss/application.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../actions/slideActions';
import Presentation from './presentation/Presentation';
import Toolbar from './toolbar/Toolbar';

/**
 * The Application Component
 */
class App extends React.Component {
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
            <div id="layout">
                <Toolbar />
                <Presentation />
            </div>
        );
    }
}

App.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(slideActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
