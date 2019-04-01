import React from 'React';
import { View, Text, TextInput } from 'react-native';

const DoubleText = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
    const { containerStyle, labelStyle, valueStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <Text style={valueStyle}>{value}</Text>
        </View>
    );
};

const styles={
    valueStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { DoubleText };