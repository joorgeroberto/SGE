import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View, Text } from 'react-native';
import { employeesFetch } from '../../actions/index';
import {Icon, Header, Left, Button as NBButton, Body, Title, Fab, Right} from 'native-base'
import {Actions} from "react-native-router-flux";

class MinhasReservas extends Component {
    render () {
        return (
            <View style={{ flex: 1 }}>
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
                        <Title style={{color: 'white'}}>Reservas</Title>
                    </Body>
                    <Right />
                </Header>

                <Fab
                    style={{ backgroundColor: '#007aff' }}
                    position="bottomRight"
                    onPress={() => {Actions.selecionarSala()}}>
                    <Icon name="add" style={{fontSize: 40}}/>
                </Fab>
                <Text>Teste</Text>
            </View>
        );
    }
}



export default MinhasReservas;