import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import {
    FETCH_PLACE_SUCCESS
} from "./types";

export const fetchPlace = () => {
    const { currentUser } = firebase.auth();
    console.log("fetchPlace");
    return (dispatch) => {
        firebase.database().ref(`/locais/`)
        // Sempre que um dado vier dessa referencia, chame esta FatArrowFunction com um objeto que descreve estes dados.
        // Ou seja, baixe e coloque os dados num objeto padrao do snapshot (que descreve estes dados) e dispache para um reducer.
            .on('value', snapshot => {
                //console.log(snapshot.val());
                dispatch({ type: FETCH_PLACE_SUCCESS, payload: snapshot.val() })
            })
    };
};