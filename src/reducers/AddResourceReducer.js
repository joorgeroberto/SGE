import {
    IMAGE_NAME,
    PLACE_UPDATE,
    CREATE_PLACE,
    CREATE_PLACE_SUCCESS,
    CREATE_PLACE_FAIL,
    CLEAN_SUCCESS_FAIL,
    RESOURCE_UPDATE,
    CREATE_RESOURCE_SUCCESS,
    CREATE_RESOURCE_FAIL,
    CREATE_RESOURCE
} from "../actions/types";

//Email inicial. Se a pessoa não enviar nada, ele retorna uma string vazia.
const INITIAL_STATE = {
    resourceName: '',
    switchValue: true,
    error: '',
    loading: false,
    success: false,
    fail: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case(RESOURCE_UPDATE):
            console.log(action.payload.prop+' '+action.payload.value);
            return ({...state, [action.payload.prop]: action.payload.value });
        case(CREATE_RESOURCE):
            return({ ...state,loading: true, error: '' });
        case (CREATE_RESOURCE_SUCCESS):
            return ({ ...state, ...INITIAL_STATE, success: true });
        case (CREATE_RESOURCE_FAIL):
            return ({ ...state, ...INITIAL_STATE, fail: true});
        case(CLEAN_SUCCESS_FAIL):
            return({...state, ...INITIAL_STATE});
        default:
            return (state);
    }

}