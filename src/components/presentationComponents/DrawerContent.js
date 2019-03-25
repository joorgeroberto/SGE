import React, {  Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image, BackHandler, Alert, Keyboard
} from 'react-native'
import {Actions, ActionConst} from "react-native-router-flux";
import PropTypes from 'prop-types';

import { List, ListItem, Content, Accordion, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemDrawer from './ItemDrawer';
import styles from "./Styles/DrawerContentStyles";

class DrawerContent extends Component {
    state = {
        //teste: {
        items: [],
        navigation: []
        //}
    };

    static propTypes = {
        onChange: PropTypes.func,
        onError: PropTypes.func,
        //closeDrawer: PropTypes.func.isRequired
    };

    _showDrawer  = () => {
        return () => {
            //Actions.refresh({key: 'drawer', open: false });
            //Actions.drawerOpen()
            Actions.drawerClose()
        };
    };
    closeDrawer = () => {
        this._drawer.close()
    };

    componentWillMount() {
        Keyboard.dismiss();
        //this.setState({ items: this.props.items });
        //console.log(this.state.items);
    }

    componentWillUnmount() {
        Keyboard.dismiss();
    }

    renderAdminList() {
        const valor = 1;
        if(valor === 1) {
            return(
                <ItemDrawer name="Adicionar Locais" navigation={() => Actions.adicionarLocais()} fontWei='bold'/>
            );
        }
    }

    render() {
        const items = this.props.items;

        return (
            <View style={styles.container}>
                <View style={{paddingBottom: 20, paddingTop: 10, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#007aff'}}>
                    <Image source={require('../../logoUfs.png')} style={styles.logo} />
                </View>
                <Content>
                    <List>
                        <ItemDrawer name="Minhas Reservas" navigation={() => Actions.minhasReservas()} fontWei='bold'/>
                        {this.renderAdminList()}
                    </List>
                </Content>

            </View>
        );
    }
}

export default DrawerContent;
