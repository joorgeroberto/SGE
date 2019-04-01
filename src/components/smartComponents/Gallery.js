import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
import CameraRollPicker from 'react-native-camera-roll-picker'
import {PermissionsAndroid} from 'react-native';
import {Body, Header, Icon, Left, Button as NBButton, Right, Title} from "native-base";
import { connect } from 'react-redux';
import { uploadImage, getSelectedImages } from "../../actions/index";

class Gallery extends Component {
    getSelectedImages = (selectedImages, currentImage) => {
        this.props.getSelectedImages({selectedImages, currentImage});
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left
                        //style={{ flex: 0.8, backgroundColor:''}}
                    >
                        <NBButton
                            transparent
                            //light
                            style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                            //onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            onPress={() => { Actions.pop() }}
                        >
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </NBButton>
                    </Left>
                    <Body
                        //style={{ alignItems: 'flex-start',justifyContent: 'center'}}
                        style={{backgroundColor:'', flex: 1, alignItems: 'center',justifyContent: 'center'}}
                    >
                        <Title style={{color: 'white'}}>Galeria</Title>
                    </Body>
                    <Right/>
                </Header>
                <CameraRollPicker selected={[]} maximum={1} callback={this.getSelectedImages.bind(this)} />
            </View>

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

const mapStateToProps = (state) => {
    const { imageName } = state.addPlace;

    return ({
        imageName: imageName
    });
};

export default connect(mapStateToProps, { uploadImage, getSelectedImages }) (Gallery);