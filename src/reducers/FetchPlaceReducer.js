import {
    FETCH_PLACE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    //const { prop, value } = action.payload;
    switch (action.type) {
        case (FETCH_PLACE_SUCCESS):
            return (action.payload);
        default:
            return (state);
    }
};