import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob'
import CameraRollPicker from 'react-native-camera-roll-picker'
import {PermissionsAndroid} from 'react-native';

export default class Gallery extends Component {
    getSelectedImages = (selectedImages, currentImage) => {

        console.log('Aqui');
        const image = currentImage.uri;
        console.log(image);
        const { currentUser } = firebase.auth();
        const Blob = RNFetchBlob.polyfill.Blob;
        const fs = RNFetchBlob.fs;
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        window.Blob = Blob;


        let uploadBlob = null;
        //const imageRef = firebase.storage().ref('posts').child("test.jpg");
        const imageRef = firebase.storage().ref(`/locais/`);
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
                Actions.adicionarLocais();

            })
            .catch((error) => {
                console.log(error);

            })

    };
    myImages() {

    }
    render() {
        return (
            <CameraRollPicker selected={[]} maximum={1} callback={this.getSelectedImages.bind(this)} />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    gallery: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});