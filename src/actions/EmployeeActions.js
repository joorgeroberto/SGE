import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
    return ({
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    });
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    /* Pega a Id do usuário autenticado (userId) no sistema
       e usa para criar o empregado no firebase através do seguinte endereço JSON: */
    // firebase.database.ref('/users/userId/employees');

    // Como se estivesse usando Redux-thunk para retornar um valor e ir para a tela anterior com pop.
    // Ou seja, não está retornando um valor. Só usando uma gambiarra pra não dá tela vermelha e
    // voltar pra tela anterior depois da operação.
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            //Poderia ser feito assim:
            //.then(() => Actions.employeeList({ type: 'reset' }));
            //Mas esta linha já faz o reset pois volta pra tela anterior.
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
 };

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        // Sempre que um dado vier dessa referencia, chame esta FatArrowFunction com um objeto que descreve estes dados.
        // Ou seja, baixe e coloque os dados num objeto padrao do snapshot (que descreve estes dados) e dispache para um reducer.
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                //Limpando os reducers na tela de criação.
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                console.log("Saved!");
                Actions.pop();
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            })
    };
};