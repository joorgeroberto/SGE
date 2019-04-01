import {
    IMAGE_NAME,
    PLACE_UPDATE,
    CREATE_PLACE,
    CREATE_PLACE_SUCCESS,
    CREATE_PLACE_FAIL,
    CLEAN_SUCCESS_FAIL
} from "../actions/types";

//Email inicial. Se a pessoa não enviar nada, ele retorna uma string vazia.
const INITIAL_STATE = {
    currentImage: '',
    chosenDate: '',
    chosenTime: '',
    placeName: '',
    capacity: '',
    switchValue: true,
    error: '',
    loading: false,
    success: false,
    fail: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case(IMAGE_NAME):
            return ({ ...state, currentImage: action.payload });
        case(PLACE_UPDATE):
            console.log(action.payload.prop+' '+action.payload.value);
            return ({...state, [action.payload.prop]: action.payload.value });
        case(CREATE_PLACE):
            return({ ...state,loading: true, error: '' });
        case (CREATE_PLACE_SUCCESS):
            return ({ ...state, ...INITIAL_STATE, success: true });
        case (CREATE_PLACE_FAIL):
            return ({ ...state, ...INITIAL_STATE, fail: true});
        case(CLEAN_SUCCESS_FAIL):
            return({...state, ...INITIAL_STATE});
        default:
            return (state);
    }

}