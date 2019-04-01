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
    PLACE_FETCH_SUCCESS,
} from "./types";
import RNFetchBlob from "react-native-fetch-blob";

export const placeUpdate = ({ prop, value }) => {
    return ({
        type: PLACE_UPDATE,
        payload: { prop, value }
    });
};

export const cleanSuccessFail = () => {
    return(dispatch) => {
        dispatch({ type: CLEAN_SUCCESS_FAIL });
    };

};

export const createPlace = ({ placeName, capacity, switchValue, currentImage }) => {
    return(dispatch) => {
        dispatch({ type: CREATE_PLACE });
        if((placeName !== "") && (capacity !== "") && (switchValue !== "") && (currentImage !== "") ) {
            firebase.database().ref(`/locais/`)
                .push({nome: placeName, capacidade: capacity, disponibilidade: switchValue})
                //Poderia ser feito assim:
                //.then(() => Actions.employeeList({ type: 'reset' }));
                //Mas esta linha já faz o reset pois volta pra tela anterior.
                .then((id_local) => {
                    id_local = id_local.toString().substr(47, 20);
                    console.log(id_local);
                    console.log("currentImage:" + currentImage);
                    uploadImage(dispatch, {currentImage}, id_local, placeName, capacity, switchValue);
                    //Actions.pop();
                })
                .catch((error) => {
                    console.log(error);
                    dispatch({ type: CREATE_PLACE_FAIL });
                });
        }
        else {
            dispatch({ type: CREATE_PLACE_FAIL });
        }

    }
};
export const getSelectedImages = ({ currentImage }) => {
    return(dispatch) => {
        console.log(currentImage);
        dispatch({
            type: IMAGE_NAME,
            payload: currentImage
        });
        Actions.adicionarLocais();
    }
};

const uploadImage = ( dispatch, {currentImage}, id_local, placeName, capacity, switchValue ) => {
    console.log("Upload: ");
    console.log(currentImage.uri);
    dispatch({ type: CREATE_PLACE });

    console.log('Aqui');
    const image = currentImage.uri;
    console.log(image);

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;


    let uploadBlob = null;
    //const imageRef = firebase.storage().ref('posts').child("test.jpg");
    const imageRef = firebase.storage().ref(`/locais/`).child(id_local);
    //firebase.database().ref(`/users/${currentUser.uid}/employees`);
    console.log(imageRef);
    let mime = 'image/jpg';
    fs.readFile(image, 'base64')
        .then((data) => {

            return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
            uploadBlob = blob;
            return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
            uploadBlob.close();
            return imageRef.getDownloadURL()
        })
        .then((url) => {
            // URL of the image uploaded on Firebase storage
            console.log(url);
            firebase.database().ref(`/locais/${id_local}`)
                .set({nome: placeName, capacidade: capacity, disponibilidade: switchValue, url: url})
                .then(() =>{
                    dispatch({ type: CREATE_PLACE_SUCCESS });
                    Actions.adicionarLocais();
                })


        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: CREATE_PLACE_FAIL });
        })

};