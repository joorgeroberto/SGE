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
import { connect } from 'react-redux';
import { verifyCurrentUserLevel } from "../../actions/index";
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
        this.props.verifyCurrentUserLevel();
        Keyboard.dismiss();
        //this.setState({ items: this.props.items });
        //console.log(this.state.items);
    }

    componentWillUnmount() {
        Keyboard.dismiss();
    }

    renderAdminList() {
        if(this.props.currentUserLevel === 0) {
            return(
                <View>
                    <ItemDrawer name="Adicionar Local" navigation={() => Actions.adicionarLocais()} fontWei='bold'/>
                    <ItemDrawer name="Adicionar Recurso" navigation={() => Actions.adicionarRecurso()} fontWei='bold'/>
                    <ItemDrawer name="Selecionar Sala" navigation={() => Actions.selecionarSala()} fontWei='bold'/>

                </View>
            );
        }
    }

    render() {
        const items = this.props.items;

        return (
            <View style={styles.container}>
                <View style={{paddingBottom: 20, paddingTop: 25, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#007aff'}}>
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

const mapStateToProps = (state) => {
    const { currentUserLevel } = state.auth;

    return { currentUserLevel };
};

export default connect(mapStateToProps, { verifyCurrentUserLevel })(DrawerContent);
