import { combineReducers } from 'redux';

/* Reducers */
import presentation from './presentationReducer';
import slide from './slideReducer';

/* The Root Reducer of the Redux Store */
const rootReducer = combineReducers({
    presentation,
    slide
});

export default rootReducer;
