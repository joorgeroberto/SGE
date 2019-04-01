import {
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT, CREATE_EVENT_FAIL,
    EVENT_PROPS_UPDATE,
    EVENT_UPDATE,
    SWITCH_RESOURCE_CHANGE, CLEAN_EVENT_SUCCESS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    disponibilidade: true,
    capacidade: '',
    id_local: '',
    url: '',
    eventName: '',
    notes: '',
    beginTime: '',
    endTime: '',
    date: '',
    loading: false,
    eventSuccess: false,
    eventFail: false,
    switchResources: []
};

export default (state = INITIAL_STATE, action) => {
    //const { prop, value } = action.payload;
    switch (action.type) {
        case (EVENT_UPDATE):
            return({...state, [action.payload.prop]: action.payload.value });
        case (EVENT_PROPS_UPDATE):
            return ({...state, [action.payload.prop]: action.payload.value });
        case(SWITCH_RESOURCE_CHANGE):
            //console.log("SWITCH_RESOURCE_CHANGE");
            //console.log(action.payload);
            return({...state, [action.payload.prop]: action.payload.value});
        case(CREATE_EVENT):
            return({ ...state,loading: true, error: '' });
        case (CREATE_EVENT_SUCCESS):
            return ({ ...state, eventSuccess: true });
        case (CREATE_EVENT_FAIL):
            return ({ ...state, ...INITIAL_STATE, eventFail: true});
        case(CLEAN_EVENT_SUCCESS_FAIL):
            return({...state, ...INITIAL_STATE});
        default:
            return (state);
    }
};