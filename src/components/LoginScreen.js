import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Styles from "./LoginFormStyle";
import {Body, Header, Icon, Left, Title} from 'native-base';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {Card, CardSection, Input, Button, Spinner} from './common';

class LoginScreen extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    //Se houver um erro de autenticação este metodo é acionado
    renderError() {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
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
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>
                    <CardSection style={{flex: 1}}>
                        <Button>
                            Cadastrar
                        </Button>
                    </CardSection>
                </View>


            );
        }
    }

    render() {
        return(
            <View>
                <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor= '#007aff'>
                    <Left/>
                    <Body style={{ flex: 1, justifyContent: 'center' }}>
                        <Title style={{color: 'white'}}>Gestão de Eventos</Title>
                    </Body>
                </Header>

                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />

                    </CardSection>

                    { this.renderError() }


                    {this.renderButton()}
                </Card>
            </View>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, user, error, loading } = state.auth;

    return {
        email: email,
        password: password,
        user: user,
        error: error,
        loading: loading
    };
};

export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(LoginScreen);