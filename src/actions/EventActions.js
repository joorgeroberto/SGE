import firebase from '@firebase/app';
import { Actions } from 'react-native-router-flux';
import {
    CREATE_EVENT,
    CREATE_EVENT_SUCCESS,
    EVENT_PROPS_UPDATE,
    EVENT_UPDATE,
    FETCH_RESOURCE_SUCCESS,
    SWITCH_RESOURCE_CHANGE,
    CLEAN_EVENT_SUCCESS_FAIL
} from "./types";

export const eventPropsUpdate = ({ prop, value }) => {
    return ({
        type: EVENT_PROPS_UPDATE,
        payload: { prop, value }
    });
};
export const eventUpdate = ({ prop, value }) => {
    return ({
        type: EVENT_UPDATE,
        payload: { prop, value }
    });
};

export const switchResourceChange = ({prop, value}) => {
    return({
        type: SWITCH_RESOURCE_CHANGE,
        payload: { prop, value }
    });
};

export const cleanEventSuccessFail = () => {
    return(dispatch) => {
        dispatch({ type: CLEAN_EVENT_SUCCESS_FAIL });
        Actions.selecionarSala();
    };

};

export const createEvent = ({nome, capacidade, id_local, url,disponibilidade, resources, notes,beginTime, endTime, date}) => {
    console.log(notes,beginTime, endTime, date);
    return(dispatch) => {
    console.log("Create Event");
    dispatch({ type: CREATE_EVENT });
    firebase.database().ref(`/locais/${id_local}`)
        .set({nome: nome, capacidade: capacidade, disponibilidade: disponibilidade, url: url, resources: resources})
        .then(() =>{
            dispatch({ type: CREATE_EVENT_SUCCESS });
            //Actions.minhasReservas();
        })
    }
};

export const fetchResource = () => {
    const { currentUser } = firebase.auth();
    console.log("fetchResource");
    return (dispatch) => {
        firebase.database().ref(`/recursos/`)
        // Sempre que um dado vier dessa referencia, chame esta FatArrowFunction com um objeto que descreve estes dados.
        // Ou seja, baixe e coloque os dados num objeto padrao do snapshot (que descreve estes dados) e dispache para um reducer.
            .on('value', snapshot => {
                //console.log(snapshot.val());
                dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: snapshot.val() })
            })
    };
};