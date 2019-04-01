import {
    UPDATE_USER,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    //const { prop, value } = action.payload;
    switch (action.type) {
        case (UPDATE_USER):
            return ({...state, [action.payload.prop]: action.payload.value });
        case (CREATE_USER):
            console.log('Criando...');
            return ({ ...state, loading: true, error: '' });
        case (CREATE_USER_SUCCESS):
            return ({ ...state, ...INITIAL_STATE });
        case (CREATE_USER_FAIL):
            return ({ ...state, error: "Não foi possível criar o usuário.", loading: false, email: '', password: '', name: '' });
        default:
            return (state);
    }
};