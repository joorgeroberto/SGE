import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    //const { prop, value } = action.payload;
    switch (action.type) {
        case (EMPLOYEES_FETCH_SUCCESS):
            //console.log(action);
            return (action.payload);
        default:
            return (state);
    }
};