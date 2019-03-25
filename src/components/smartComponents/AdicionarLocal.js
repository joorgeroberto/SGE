import React, { Component } from 'react';
import {View, Text, PermissionsAndroid, Image, Switch, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Body, Header, Icon, Left, Button as NBButton, Title, CardItem, Card, DatePicker} from 'native-base';
import { emailChanged, passwordChanged, loginUser } from "../../actions/index";
import {CardSection, Input, Button as CButton, Spinner} from '../presentationComponents/index';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import styles from "./Styles/AdicionarLocalStyle";

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class AdicionarLocal extends Component {
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




    render() {
        return(
            <ScrollView style={{ flex: 1 }}>
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
                </Header>
                <View style={styles.container}>
                    <View style={{ paddingBottom: 20, paddingTop: 10, alignItems: 'center', justifyContent: 'flex-start'}}>
                        <NBButton
                            transparent
                            style={styles.nbButton}
                            onPress={() => {
                                this.requestCameraPermission();
                                Actions.gallery()
                            }}
                        >
                            <Image
                                source={{uri: 'content://media/external/images/media/228663'}}
                                style={styles.image}
                            />
                        </NBButton>
                    </View>
                    <Card>
                        <CardSection >
                            <Input
                                label="Nome"
                                placeholder="Nome"
                                onChangeText={() => console.log('mudou')}
                                //value={this.props.name}
                            />
                        </CardSection>
                        <CardSection >
                            <Input
                                label="Capacidade"
                                placeholder="Capacidade"
                                keyboardType="numeric"
                                onChangeText={() => console.log('mudou')}
                                //value={this.props.name}
                            />
                        </CardSection>
                        <CardItem>
                            <Left style={{ flex: 1}}>
                                <Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Data</Text>
                            </Left>
                            <Body style={{ flex: 4,  paddingLeft: 55}}>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                    disabled={false}
                                />
                            </Body>
                        </CardItem>
                        <CardItem >
                            <Left style={{ flex: 1}}>
                                <Switch
                                    value={true}
                                    //onValueChange={this.onSwitchChange.bind(this)}
                                    onValueChange={console.log('mudou')}
                                    thumbColor='#4A6572'
                                />
                            </Left>
                            <Body style={{ flex: 4}}>
                                <View style={{ flex: 4, paddingLeft: 50}}>
                                    <Text style={{ fontSize: 18, fontWeight: 'normal'}}>Disponibilidade</Text>
                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                    <View style={styles.button}>
                        <CardSection style={{flex: 1}}>
                            <CButton onPress={() => {
                                console.log('Gravar Local');
                            }}>
                                Adicionar
                            </CButton>
                        </CardSection>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default AdicionarLocal;