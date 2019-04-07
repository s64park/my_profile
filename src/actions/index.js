import { SAMPLE } from './actionConstants';

export const sampleAction = () => dispatch => {
    dispatch({ type: SAMPLE, payload: '' });
}