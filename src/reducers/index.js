import { combineReducers } from 'redux';

/* Reducers */
import slides from './slideReducer';

/* The Root Reducer of the Redux Store */
const rootReducer = combineReducers({
    slides
});

export default rootReducer;
