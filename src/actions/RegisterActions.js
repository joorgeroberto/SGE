import firebase from '@firebase/app';
import '@firebase/auth';
import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    UPDATE_USER,
    CREATE_USER
} from "./types";
import {Actions} from "react-native-router-flux";


export const userUpdate = ({ prop, value }) => {
    return ({
        type: UPDATE_USER,
        payload: { prop, value }
    });
};

export const createUser = ({ email, password, name }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });
        const tipo_usuario = 1;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                console.log(user.user.uid);
                firebase.database().ref(`/usuarios/${user.user.uid}`)
                    .set({ name, email, tipo_usuario })
                    .then(() => {
                        //Limpando os reducers na tela de criação.
                        //dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                        console.log("Saved!");
                        createUserSuccess(dispatch, user);
                        //Actions.pop();
                    })
                    .catch((error) => {
                        console.log(error);
                        createUserFailed(dispatch)
                    });
                //console.log(user);
                //createUserSuccess(dispatch, user);
            })
            .catch((error) => {
                console.log(error.message);
                createUserFailed(dispatch)
            });
    };
};

const createUserFailed = (dispatch) => {
    dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user) => {
    console.log("User");
    console.log(user);
    dispatch({
        type: CREATE_USER_SUCCESS
    });

    Actions.pop();
};