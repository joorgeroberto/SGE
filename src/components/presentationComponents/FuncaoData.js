import {Text, TouchableOpacity} from "react-native";
import {Body, Card, CardItem, Left} from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";

state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    chosenDate: '',
    chosenTime: ''
};


//Guardando a data
setDate(newDate) {
    this.setState({ chosenDate: newDate });
}

_showDatePicker = () => this.setState({ isDatePickerVisible: true });

_hideDatePicker = () => this.setState({ isDatePickerVisible: false });

_handleDatePicked = (date) => {
    console.log('A date has been picked: ', date.toString().substr(4, 12));
    this.setDate(date.toString().substr(8, 2)
        +' '+date.toString().substr(4, 3)
        +' '+date.toString().substr(11, 4));

    this.props.dateTimeUpdate({ prop: 'chosenDate', value: (date.toString().substr(8, 2)
            +' '+date.toString().substr(4, 3)
            +' '+date.toString().substr(11, 4))});
    console.log(this.props.chosenDate);
    this._hideDatePicker();
};

//Guardando a hora
setTime(newTime) {
    this.setState({ chosenTime: newTime });
}

_showTimePicker = () => this.setState({ isTimePickerVisible: true });

_hideTimePicker = () => this.setState({ isTimePickerVisible: false });

_handleTimePicked = (time) => {
    console.log('A date has been picked: ', time.toString().substr(16, 5));
    this.setTime(time.toString().substr(16, 5));

    this.props.dateTimeUpdate({ prop: 'chosenTime', value: (time.toString().substr(16, 5))});
    console.log(this.props.chosenTime);
    this._hideTimePicker();
};

showDate() {
    if(this.props.chosenDate)
        return(<Text style={{color: 'black', fontSize: 18, paddingLeft: 10}}>{this.props.chosenDate}</Text>);
    else
        return(<Text style={{color: '#d3d3d3', fontSize: 18, paddingLeft: 10}}>Selecione a data do evento</Text>);
}

showTime() {
    if(this.props.chosenTime)
        return(<Text style={{color: 'black', fontSize: 18, paddingLeft: 10}}>{this.props.chosenTime}</Text>);
    else
        return(<Text style={{color: '#d3d3d3', fontSize: 18, paddingLeft: 10}}>Selecione a hora do evento</Text>);
}

<CardItem>
    <Left style={{ flex: 1}}>
        <Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Data</Text>
    </Left>
    <Body style={{ flex: 4,  paddingLeft: 60}}>
    <TouchableOpacity onPress={this._showDatePicker}>
        {this.showDate()}
    </TouchableOpacity>
    <DateTimePicker
        //mode='time'
        isVisible={this.state.isDatePickerVisible}
        onConfirm={this._handleDatePicked}
        onCancel={this._hideDatePicker}
    />
    </Body>
</CardItem>
<CardItem>
<Left style={{ flex: 1}}>
<Text style={{fontSize: 18, paddingLeft: 10, flex: 1}}>Hora</Text>
</Left>
<Body style={{ flex: 4,  paddingLeft: 60}}>
<TouchableOpacity onPress={this._showTimePicker}>
    {this.showTime()}
</TouchableOpacity>
<DateTimePicker
mode='time'
isVisible={this.state.isTimePickerVisible}
onConfirm={this._handleTimePicked}
onCancel={this._hideTimePicker}
/>
</Body>
</CardItem>