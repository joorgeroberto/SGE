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

    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handleTimePicked = (time) => {
        if(this.props.type === 'begin') {
            console.log('A date has been picked: ', time.toString().substr(16, 5));
            //this.setTime(time.toString().substr(16, 5));

            this.props.eventUpdate({ prop: 'beginTime', value: (time.toString().substr(16, 5))});
            console.log(this.props.beginTime);
            this._hideTimePicker();
        }
        else if(this.props.type === 'end') {
            console.log('A date has been picked: ', time.toString().substr(16, 5));
            //this.setTime(time.toString().substr(16, 5));

            this.props.eventUpdate({ prop: 'endTime', value: (time.toString().substr(16, 5))});
            console.log(this.props.endTime);
            this._hideTimePicker();
        }
    };

    showTime() {
        if(this.props.type === 'begin') {
            if(this.props.beginTime)
                return(<Text style={{color: 'black', fontSize: 18, paddingLeft: 10}}>{this.props.beginTime}</Text>);
            else
                return(<Text style={{color: '#d3d3d3', fontSize: 18, paddingLeft: 10}}>Selecione a hora de inicio.</Text>);
        }
        else if(this.props.type === 'end') {
            if(this.props.endTime)
                return(<Text style={{color: 'black', fontSize: 18, paddingLeft: 10}}>{this.props.endTime}</Text>);
            else
                return(<Text style={{color: '#d3d3d3', fontSize: 18, paddingLeft: 10}}>Selecione a hora de termino.</Text>);
        }
    }
    render() {
        return(
            <View>
                <TouchableOpacity onPress={this._showTimePicker}>
                    {this.showTime()}
                </TouchableOpacity>
                    <DateTimePicker
                        mode='time'
                        isVisible={this.state.isTimePickerVisible}
                        onConfirm={this._handleTimePicked}
                        onCancel={this._hideTimePicker}
                    />
            </View>
        );
}
}

const mapStateToProps = (state) => {
    const { beginTime, endTime } = state.event;

    return ({ beginTime, endTime });
};

export default connect(mapStateToProps, { eventUpdate })(TimePicker);