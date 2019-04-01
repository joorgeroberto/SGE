import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    //const { prop, value } = action.payload;
    switch (action.type) {
        case (EMPLOYEE_UPDATE):
            //Poderiamos fazer assim:
            /*if (action.payload.prop === 'name')
                return ({ ...state, name: action.payload.value });
            else
                return ({ ...state, phone: action.payload.value });*/

            //Mas usaremos a interpolação o ES6 para que, em tempo de execução, o action decida qual o atributo a ser modificado.
            return ({...state, [action.payload.prop]: action.payload.value });
        //Limpa para o estado inicial.
        case (EMPLOYEE_CREATE): {
            console.log("Employee_create");
            return (INITIAL_STATE); }
        case (EMPLOYEE_SAVE_SUCCESS):
            console.log("Save_success");
            return (INITIAL_STATE);
        default:
            return (state);
    }
};