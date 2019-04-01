import {Text, TouchableOpacity, View} from "react-native";
import React, { Component } from 'react';
import {Body, Card, CardItem, Left} from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from 'react-redux';
import {cleanSuccessFail, eventPropsUpdate, eventUpdate} from "../../actions";



class TimePicker extends Component {
    state = {
        isDatePickerVisible: false,
        isTimePickerVisible: false,
        //chosenDate: '',
        //chosenTime: ''
    };


    _showDatePicker = () => this.setState({ isDatePickerVisible: true });

    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date.toString().substr(4, 12));

        this.props.eventUpdate({ prop: 'date', value: (date.toString().substr(8, 2)
                +' '+date.toString().substr(4, 3)
                +' '+date.toString().substr(11, 4))});
        console.log(this.props.date);
        this._hideDatePicker();
    };

    showDate() {
        if(this.props.date)
            return(<Text style={{color: 'black', fontSize: 18, paddingLeft: 10}}>{this.props.date}</Text>);
        else
            return(<Text style={{color: '#d3d3d3', fontSize: 18, paddingLeft: 10}}>Selecione a data do evento</Text>);
    }
    render() {
        return(
            <View>
                <TouchableOpacity onPress={this._showDatePicker}>
                    {this.showDate()}
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDatePicker}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { date } = state.event;

    return ({ date });
};

export default connect(mapStateToProps, { eventUpdate })(TimePicker);