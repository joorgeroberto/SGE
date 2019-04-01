import React, { Component } from 'react';
import {Switch, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Body, CardItem, Left, Right, Icon,Card} from "native-base";
import { CardSection } from './CardSection';
import {connect} from'react-redux';
import { eventPropsUpdate, switchResourceChange } from "../../actions";
import _ from "lodash";

class ListItem extends Component {

    onRowPress = () => {
        //Passando os dados do empregado para a proxima tela.
        console.log(this.props);
        _.each(this.props.local.item, (value, prop) => {
            this.props.eventPropsUpdate({ prop, value });
        });
        const value = false;
        const resources = _.each(this.props.resources, (val, id_recurso) => {
            // Retorna um objeto que possui todos os valores do "modelo" empregado e o uid.
            // Ou seja, como resultado, teremos vários objetos com o formato:
            // { shift: 'Segunda', name: 'Jorge', phone: 5555555, uid: 'iajiajsaijas' };
            return ({ ...val, id_recurso });
        });
        console.log("ListItemResources: ");
        console.log(resources);
        this.props.switchResourceChange({ prop: 'switchResources', value: resources });
        this.props.navigation();

        //console.log(this.props.local.item)
    };

    render() {
        //console.log(this.props.local);
        const { nome, capacidade } = this.props.local.item;
        //console.log(this.props.local.item);
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} style={{paddingLeft: 10, paddingRight: 10}}>

                    <Card>
                        <CardItem>
                            <Left style={{ flex: 4}}>
                                <View style={{ flex: 4 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{nome}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'normal'}}>Capacidade: {capacidade} </Text>
                                </View>
                            </Left>
                            <Right style={{ flex: 1}}>
                                <Icon name='arrow-forward' style={{color:'black'}} />
                            </Right>
                        </CardItem>
                    </Card>

            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, { eventPropsUpdate, switchResourceChange })(ListItem);