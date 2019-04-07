import { combineReducers } from 'redux';
import { SAMPLE } from '../actions/actionConstants';

const sampleReducer = (state='', action) => {
    switch(action.type) {
        case SAMPLE:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    sample: sampleReducer
});