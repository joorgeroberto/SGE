import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    CURRENT_USER_LEVEL
} from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const verifyCurrentUserLevel = () => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        console.log(currentUser);
        firebase.database().ref(`/usuarios/${currentUser.uid}/tipo_usuario`)
            .on('value', (snapshot) => {
                dispatch({ type: CURRENT_USER_LEVEL, payload: snapshot.val() })
            })
    }
};

//action que fará o login de forma assíncrona
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                loginUserFailed(dispatch);
                /*firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFailed(dispatch))*/
            });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};