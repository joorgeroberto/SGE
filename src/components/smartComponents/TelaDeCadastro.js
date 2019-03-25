import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Styles from "./Styles/TelaDeCadastroStyle";
import {Body, Header, Icon, Left, Title, Button as NBButton} from 'native-base';
import { userUpdate, createUser } from "../../actions/index";
import {Card, CardSection, Input, Spinner, Button as CMButton} from '../presentationComponents/index';
import { Actions } from 'react-native-router-flux';

class TelaDeCadastro extends Component {
    onButtonPress() {
        const { email, password, name } = this.props;
        this.props.createUser({ email, password, name });
    }
    renderError() {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={[Styles.errorTextStyle]}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton() {
        if(this.props.loading) {
            return(
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
            );
        }
        else {
            return(
                <View style={[Styles.loginRow]}>
                    <CardSection style={{flex: 1}}>
                        <CMButton onPress={this.onButtonPress.bind(this)}>
                            Confirmar
                        </CMButton>
                    </CardSection>
                </View>
            );
        }
    }

    render() {
        return(
            <View>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left>
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
                    <Body style={{ flex: 1, justifyContent: 'center'}}>
                        <Title style={{color: 'white'}}>Cadastro</Title>
                    </Body>
                </Header>
                <Card>
                    <CardSection>
                        <Input
                            label="Nome"
                            placeholder="Nome"
                            onChangeText={(text) => this.props.userUpdate({ prop: 'name', value: text })}
                            value={this.props.name}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@email.com"
                            onChangeText={(text) => this.props.userUpdate({ prop: 'email', value: text })}
                            value={this.props.email}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={(text) => this.props.userUpdate({ prop: 'password', value: text })}
                            value={this.props.password}
                        />
                    </CardSection>
                </Card>

                { this.renderError() }


                {this.renderButton()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, password, email, loading, error } = state.register;

    return ({
        name: name,
        password: password,
        email: email,
        loading: loading,
        error: error
    });
};

export default connect(mapStateToProps, { userUpdate, createUser })(TelaDeCadastro);