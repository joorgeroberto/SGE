import React, { Component } from 'react';
import {View, Text, PermissionsAndroid, Image, Switch, ScrollView, Platform, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Body, Header, Icon, Left, Button as NBButton, Title, CardItem, Card, Right} from 'native-base';
import { placeUpdate, getSelectedImages, resourceUpdate, cleanSuccessFail, createResource } from "../../actions/index";
import {CardSection, Input, Button as CButton, Spinner, Confirm} from '../presentationComponents/index';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import styles from "./Styles/AdicionarRecursoStyle";
import DateTimePicker from 'react-native-modal-datetime-picker';

class AdicionarRecurso extends Component {
    //".validate": "!root.child('/locais/'+$id_local).child(newData.child('name').val()).exists()"
    onAcceptSuccess() {
        Actions.adicionarRecurso();
        this.props.cleanSuccessFail();
    }

    onDeclineSuccess() {
        Actions.minhasReservas();
        this.props.cleanSuccessFail();
    }

    onAcceptFail() {
        Actions.adicionarRecurso();
        this.props.cleanSuccessFail();
    }

    onDeclineFail() {
        Actions.minhasReservas();
        this.props.cleanSuccessFail();
    }

    onButtonPress() {
        const { resourceName, switchValue } = this.props;
        this.props.createResource({ resourceName, switchValue });
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
                    <Title style={{color: 'white'}}>Adicionar Recurso</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView style={{ flex: 0.92 }}>
                    <View style={styles.container}>
                        <Card>
                            <CardSection >
                                <Input
                                    label="Nome"
                                    placeholder="Nome"
                                    onChangeText={(text) => this.props.resourceUpdate({ prop: 'resourceName', value: text })}
                                    value={this.props.eventName}
                                    //value={this.props.name}
                                />
                            </CardSection>
                            <CardItem >
                                <Left style={{ flex: 1}}>
                                    <Switch
                                        //onValueChange={this.onSwitchChange.bind(this)}
                                        onValueChange={(value) => this.props.resourceUpdate({ prop: 'switchValue', value: value })}
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
                                Recurso criado com sucesso!
                                Deseja adicionar outro recurso?
                            </Confirm>
                            <Confirm
                                visible={this.props.fail}
                                onAccept={this.onAcceptFail.bind(this)}
                                onDecline={this.onDeclineFail.bind(this)}
                            >
                                Erro ao adicionar recurso!
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
    const { resourceName, switchValue, loading, success, fail } = state.addResource;

    return ({ resourceName, switchValue, loading, success, fail });
};

export default connect(mapStateToProps, { resourceUpdate, cleanSuccessFail, createResource }) (AdicionarRecurso);