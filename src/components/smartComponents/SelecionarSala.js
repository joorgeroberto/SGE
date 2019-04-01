import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, View } from 'react-native';
import {Body, Header, Icon, Left, Button as NBButton, Title, CardItem, Card, Right} from 'native-base';
import { fetchPlace, fetchResource, switchResourceChange } from '../../actions/index';
import ListItem  from '../presentationComponents/ListItem';
import {Actions} from "react-native-router-flux";

class SelecionarSala extends Component {
    componentWillMount() {
        this.props.fetchPlace();
        this.props.fetchResource();

        //this.createDataSource(this.props);
    }


    // LifeCycleMethod que será chamado quando estiver prestes a receber um novo conjunto de props.
    // nextProps ate the next set of props that this component will be rendered with.
    // this.props is still the old se of props
    componentWillReceiveProps(nextProps) {
        //this.createDataSource(nextProps);
    }
    componentWillUpdate() {
        //this.props.switchResourceChange(this.props.resources);
    }

    renderItem(local) {
        //console.log(this.props.locais);
        //console.log(local.item);
        console.log(this.props.resources);

        return(
            <ListItem
                local={local}
                resources={this.props.resources}
                navigation={() => Actions.criarEvento()}
            />
        );
    }

    render () {
        //console.log(this.props);

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left>
                        <NBButton
                            transparent
                            //light
                            style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                            //onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            onPress={() => {
                                Actions.pop();
                            }}
                        >
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </NBButton>
                    </Left>
                    <Body style={{ flex: 1}}>
                    <Title style={{color: 'white'}}>Selecionar Sala</Title>
                    </Body>
                    <Right/>
                </Header>
                <FlatList
                    data={this.props.locais}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={(local, index) => index.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    //Usando o lodash para mapear os empregados com o par (valor, chave unica)
    const locais = _.map(state.fetchPlace, (val, id_local) => {
        // Retorna um objeto que possui todos os valores do "modelo" empregado e o uid.
        // Ou seja, como resultado, teremos vários objetos com o formato:
        // { shift: 'Segunda', name: 'Jorge', phone: 5555555, uid: 'iajiajsaijas' };
        return ({ ...val, id_local });
    });
    const resources = _.map(state.fetchResource, (val, id_recurso) => {
        // Retorna um objeto que possui todos os valores do "modelo" empregado e o uid.
        // Ou seja, como resultado, teremos vários objetos com o formato:
        // { shift: 'Segunda', name: 'Jorge', phone: 5555555, uid: 'iajiajsaijas' };
        return ({ ...val, id_recurso });
    });

    return ({ locais, resources });
};

export default connect(mapStateToProps, { fetchPlace, fetchResource, switchResourceChange })(SelecionarSala);