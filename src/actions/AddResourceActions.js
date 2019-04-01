import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import {
    CREATE_PLACE_SUCCESS,
    CREATE_PLACE_FAIL,
    CREATE_PLACE,
    IMAGE_NAME,
    PLACE_UPDATE,
    CLEAN_SUCCESS_FAIL,
    RESOURCE_UPDATE,
    CREATE_RESOURCE_SUCCESS,
    CREATE_RESOURCE_FAIL,
    CREATE_RESOURCE
} from "./types";
import RNFetchBlob from "react-native-fetch-blob";

export const resourceUpdate = ({ prop, value }) => {
    return ({
        type: RESOURCE_UPDATE,
        payload: { prop, value }
    });
};

export const createResource = ({ resourceName, switchValue }) => {
    return(dispatch) => {
        dispatch({ type: CREATE_RESOURCE });
        if(resourceName !== "") {
            firebase.database().ref(`/recursos/`)
                .push({nome: resourceName, disponibilidade: switchValue})
                //Poderia ser feito assim:
                //.then(() => Actions.employeeList({ type: 'reset' }));
                //Mas esta linha já faz o reset pois volta pra tela anterior.
                .then(() => {
                    dispatch({ type: CREATE_RESOURCE_SUCCESS });
                })
                .catch((error) => {
                    console.log(error);
                    dispatch({ type: CREATE_RESOURCE_FAIL });
                });
        }
        else {
            dispatch({ type: CREATE_RESOURCE_FAIL });
        }

    }
};
