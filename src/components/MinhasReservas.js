import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View, Text } from 'react-native';
import { employeesFetch } from '../actions';
import {Icon, Header, Left, Button, Body, Title, Fab} from 'native-base'

class MinhasReservas extends Component {
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left>
                        <Icon name='menu' style={{color:'white'}} />
                    </Left>
                    <Body style={{ flex: 1}}>
                        <Title style={{color: 'white'}}>Minhas Reservas</Title>
                    </Body>
                </Header>

                <Fab
                    style={{ backgroundColor: '#007aff' }}
                    position="bottomRight"
                    onPress={() => this.setState( console.log('foi'))}>
                    <Icon name="add" style={{fontSize: 40}}/>
                </Fab>
                <Text>Teste</Text>
            </View>
        );
    }
}



export default MinhasReservas;