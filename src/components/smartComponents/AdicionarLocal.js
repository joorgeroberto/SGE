import React, { Component } from 'react';
import {View, Text, PermissionsAndroid, Image, Switch, ScrollView, Platform, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Body, Header, Icon, Left, Button as NBButton, Title, CardItem, Card, Right} from 'native-base';
import { placeUpdate, getSelectedImages, createPlace, cleanSuccessFail } from "../../actions/index";
import {CardSection, Input, Button as CButton, Spinner, Confirm} from '../presentationComponents/index';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import styles from "./Styles/AdicionarLocalStyle";
import DateTimePicker from 'react-native-modal-datetime-picker';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class AdicionarLocal extends Component {

    onAcceptSuccess() {
        Actions.adicionarLocais();
        this.props.cleanSuccessFail();
    }

    onDeclineSuccess() {
        Actions.minhasReservas();
        this.props.cleanSuccessFail();
    }

    onAcceptFail() {
        Actions.adicionarLocais();
        this.props.cleanSuccessFail();
    }

    onDeclineFail() {
        Actions.minhasReservas();
        this.props.cleanSuccessFail();
    }

    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    sourceName() {
        //console.log(this.props.imageName);
        if(this.props.currentImage) {
            console.log(this.props.currentImage);
            return(
                {uri: this.props.currentImage.uri}
            );
        }
        else
            return(require('../../logoUfs.png'));
    }

    onButtonPress() {
        const { placeName, capacity, switchValue, currentImage } = this.props;
        this.props.createPlace({ placeName, capacity, switchValue, currentImage });
    }

    renderButton() {
        if(this.props.loading) {
            return(
                <View style={styles.button}>
                    <CardSection style={{flex: 1, justifyContent: 'flex-end',}}>
                        <Spinner size="large" />
                    </CardSection>
                </View>
            );
        }
        else {
            return(
                <View style={styles.button}>
                    <CardSection style={{flex: 1, justifyContent: 'flex-end',}}>
                        <CButton
                            style={{flex: 1, justifyContent: 'flex-end',}}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            Adicionar
                        </CButton>
                    </CardSection>
                </View>
            );
        }
    }

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left>
                        <NBButton
                            transparent
                            //light
                            style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                            //onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            onPress={() => {
                                console.log("Drawer Aberto!");
                                Actions.drawerOpen();
                            }}
                        >
                            <Icon name='menu' style={{color:'white'}} />
                        </NBButton>
                    </Left>
                    <Body style={{ flex: 1}}>
                    <Title style={{color: 'white'}}>Adicionar Local</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView style={{ flex: 0.92 }}>
                    <View style={styles.container}>
                        <View style={{ paddingBottom: 5, paddingTop: 5, alignItems: 'center', justifyContent: 'flex-start'}}>
                            <NBButton
                                transparent
                                style={styles.nbButton}
                                onPress={() => {
                                    Platform.OS === 'android' ? this.requestCameraPermission() : console.log('ios');

                                    Actions.gallery()
                                }}
                            >
                                <Image
                                    //source={{uri: 'content://media/external/images/media/228663'}}
                                    source={this.sourceName()}
                                    style={styles.image}
                                />
                            </NBButton>
                        </View>
                        <Card>
                            <CardSection >
                                <Input
                                    label="Nome"
                                    placeholder="Nome"
                                    onChangeText={(text) => this.props.placeUpdate({ prop: 'placeName', value: text })}
                                    value={this.props.placeName}
                                    //value={this.props.name}
                                />
                            </CardSection>
                            <CardSection >
                                <Input
                                    label="Capacidade"
                                    placeholder="Capacidade"
                                    keyboardType="numeric"
                                    onChangeText={(text) => this.props.placeUpdate({ prop: 'capacity', value: text })}
                                    value={this.props.capacity}
                                />
                            </CardSection>

                            <CardItem >
                                <Left style={{ flex: 1}}>
                                    <Switch
                                        //onValueChange={this.onSwitchChange.bind(this)}
                                        onValueChange={(value) => this.props.placeUpdate({ prop: 'switchValue', value: value })}
                                        value={this.props.switchValue}
                                        thumbColor='#4A6572'
                                    />
                                </Left>
                                <Body style={{ flex: 4}}>
                                    <View style={{ flex: 4, paddingLeft: 60}}>
                                        <Text style={{ fontSize: 18, fontWeight: 'normal'}}>Disponibilidade</Text>
                                    </View>
                                </Body>
                            </CardItem>

                            <Confirm
                                visible={this.props.success}
                                onAccept={this.onAcceptSuccess.bind(this)}
                                onDecline={this.onDeclineSuccess.bind(this)}
                            >
                                Local criado com sucesso!
                                Deseja adicionar outro local?
                            </Confirm>
                            <Confirm
                                visible={this.props.fail}
                                onAccept={this.onAcceptFail.bind(this)}
                                onDecline={this.onDeclineFail.bind(this)}
                            >
                                Erro ao adicionar local!
                                Deseja tentar novamente?
                            </Confirm>
                        </Card>

                    </View>
                </ScrollView>
                {this.renderButton()}

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { currentImage, chosenDate, chosenTime, placeName, capacity, switchValue,loading, success, fail  } = state.addPlace;

    return ({
        currentImage: currentImage,
        chosenDate: chosenDate,
        chosenTime: chosenTime,
        placeName: placeName,
        capacity: capacity,
        switchValue: switchValue,
        loading,
        success, fail
    });
};

export default connect(mapStateToProps, { getSelectedImages, placeUpdate, createPlace, cleanSuccessFail }) (AdicionarLocal);