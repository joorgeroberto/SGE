//Lida com tudo relacionado a autenticação do usuário como Login e Password.

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

//Email inicial. Se a pessoa não enviar nada, ele retorna uma string vazia.
const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch(action.type) {
        case (EMAIL_CHANGED):
            //Crie um novo objeto, pegue o state atual, defina a propriedade email com action.payload e coloque no state.
            // Ou seja, crie um novo estado e sobrescreva o email com action.payload.
            //console.log("Email");
            return ({ ...state, email: action.payload });
        case (PASSWORD_CHANGED):
            //console.log("Password");
            return ({ ...state, password: action.payload });
        case (LOGIN_USER):
            return ({ ...state, loading: true, error: '' });
        case (LOGIN_USER_SUCCESS):
            //Toda vez que chamamos este reducer ele zera os atributos para o estado inicial e modifica outros.
            //return ({ ...state, user: action.payload, error: '', loading: false, email: '', password: '' });

            //Para diminuir a quantidade de códigos, colocaremos o estado inicial e só midificamos o que precisar.
            return ({ ...state, ...INITIAL_STATE, user: action.payload });
        case (LOGIN_USER_FAIL):
            return ({ ...state, error: "Login ou senha inválidos.", loading: false, email: '', password: '' });
        default:
            return (state);
    }
};