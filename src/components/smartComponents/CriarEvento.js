import styles from './Styles/CriarEventoStyle';
import _ from 'lodash';
import {
    Switch,
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
    Platform,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { eventPropsUpdate, cleanEventSuccessFail, eventUpdate, fetchResource, switchResourceChange, createEvent } from "../../actions/index";
import {Body,Header,  Button as NBButton, Title, CardItem, Left, Right, Icon,Card} from "native-base";
import { Actions } from 'react-native-router-flux';
import {Button as CButton, CardSection, Confirm, Input, Spinner, DoubleText} from "../presentationComponents";
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import DateTimePicker from "react-native-modal-datetime-picker";
import ListItem from "../presentationComponents/ListItem";

class CriarEvento extends Component {
    componentWillMount() {
        /*this.props.fetchResource();
        this.props.switchResourceChange(this.props.resources);
        console.log("switchResources");
        console.log(this.props.switchResources);*/
        //console.log(this.props);
    }
    onAcceptSuccess() {
        //Actions.criarEvento();
        this.props.cleanEventSuccessFail();
    }

    onDeclineSuccess() {
        Actions.minhasReservas();
        this.props.cleanEventSuccessFail();
    }

    onAcceptFail() {
        //Actions.criarEvento();
        this.props.cleanEventSuccessFail();
    }

    onDeclineFail() {
        Actions.minhasReservas();
        this.props.cleanEventSuccessFail();
    }

    onButtonPress = () => {
        console.log(this.props);
        const { nome, capacidade, disponibilidade, id_local, url, notes,beginTime, endTime, date } = this.props;
        const resources = this.props.switchResources;
        this.props.createEvent({nome, capacidade, id_local, url,disponibilidade, resources, notes,beginTime, endTime, date});
    };

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

    setValue(resource, value) {
        const {nome, id_recurso} = resource.item;
        const switchResources = _.map(this.props.switchResources, (val) => {
            if(val.id_recurso === id_recurso){
                //console.log(val.id_recurso);
                //val.value = value;
                //console.log({...val });
                return ({ ...val, value });
            }
            return ({ ...val });
            //return ({ ...val, id_recurso });
        });
        //console.log(switchResources);
        this.props.switchResourceChange({ prop: 'switchResources', value: switchResources });
        //console.log(this.props.switchResources);
    }

    renderResources(resource) {
        //console.log(resource.item);
        const {nome, id_recurso, value } = resource.item;
        return(
            <CardItem >
                <Body style={{ flex: 4}}>
                    <View style={{ flex: 4, paddingLeft: 60}}>
                        <Text style={{ fontSize: 18, fontWeight: 'normal'}}>{nome}</Text>
                    </View>
                </Body>
                <Right style={{ flex: 1}}>
                    <Switch
                        //onValueChange={this.onSwitchChange.bind(this)}
                        onValueChange={(value) => this.setValue(resource,value)}
                        value={value}
                        thumbColor='#4A6572'
                    />
                </Right>
            </CardItem>
        );
    }

    render() {
        const { nome, capacidade, disponibilidade, id_local, url } = this.props;
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
                                Actions.selecionarSala();
                            }}
                        >
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </NBButton>
                    </Left>
                    <Body style={{ flex: 1}}>
                        <Title style={{color: 'white'}}>Criar Evento</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView style={{ flex: 0.92 }}>
                    <View style={styles.container}>
                        <View style={{ paddingBottom: 5, paddingTop: 5, alignItems: 'center', justifyContent: 'flex-start'}}>
                            <NBButton
                                transparent
                                style={styles.nbButton}
                                onPress={() => {console.log("Clicou na imagem")}}
                            >
                                <Image
                                    //source={{uri: 'content://media/external/images/media/228663'}}
                                    source={{uri: url}}
                                    style={styles.image}
                                />
                            </NBButton>
                        </View>
                        <Card>
                            <CardSection>
                                <DoubleText
                                    label="Local:"
                                    value={nome}
                                />
                            </CardSection>
                            <CardSection>
                                <DoubleText
                                    label="Capacidade:"
                                    value={capacidade+" pessoas"}
                                />
                            </CardSection>
                            <CardSection >
                                <Input
                                    label="Nome"
                                    placeholder="Digite o nome do evento"
                                    onChangeText={(text) => this.props.eventUpdate({ prop: 'eventName', value: text })}
                                    value={this.props.eventName}
                                />
                            </CardSection>
                            <CardSection >
                                <Input
                                    label="Observações"
                                    placeholder="Digite observações"
                                    onChangeText={(text) => this.props.eventUpdate({ prop: 'notes', value: text })}
                                    value={this.props.notes}
                                />
                            </CardSection>

                            <CardItem>
                                <Left style={{ flex: 1}}>
                                    <Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Data</Text>
                                </Left>
                                <Body style={{ flex: 3,  paddingLeft: 60}}>
                                    <DatePicker />
                                </Body>
                            </CardItem>

                            <CardItem>
                                <Left style={{ flex: 1}}>
                                    <Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Inicio</Text>
                                </Left>
                                <Body style={{ flex: 3,  paddingLeft: 60}}>
                                    <TimePicker type={'begin'}/>
                                </Body>
                            </CardItem>

                            <CardItem>
                                <Left style={{ flex: 1}}>
                                    <Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Fim</Text>
                                </Left>
                                <Body style={{ flex: 3,  paddingLeft: 60}}>
                                    <TimePicker type={'end'}/>
                                </Body>
                            </CardItem>
                            <CardSection>
                                <Text
                                    style={{ alignItems: 'center', justifyContent: 'flex-start', fontSize: 18}}
                                >
                                    Selecione os recursos desejados:
                                </Text>
                            </CardSection>
                            <FlatList
                                data={this.props.switchResources}
                                renderItem={this.renderResources.bind(this)}
                                keyExtractor={(resource, index) => index.toString()}
                            />
                            <Confirm
                                visible={this.props.eventSuccess}
                                onAccept={this.onAcceptSuccess.bind(this)}
                                onDecline={this.onDeclineSuccess.bind(this)}
                            >
                                Evento criado com sucesso!
                                Deseja adicionar outro evento?
                            </Confirm>
                            <Confirm
                                visible={this.props.eventFail}
                                onAccept={this.onAcceptFail.bind(this)}
                                onDecline={this.onDeclineFail.bind(this)}
                            >
                                Erro ao adicionar evento!
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

    const { nome, capacidade, disponibilidade, id_local, url,
            eventName,notes,beginTime, endTime, date, loading, switchResources, eventSuccess, eventFail } = state.event;

    return ({ nome, capacidade, disponibilidade, id_local, url, eventSuccess,
        eventFail, eventName, loading, switchResources,notes,beginTime, endTime, date });
};

export default connect(mapStateToProps, { eventPropsUpdate, cleanEventSuccessFail, eventUpdate, fetchResource, switchResourceChange, createEvent })(CriarEvento);