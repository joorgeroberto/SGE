import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
           <ActivityIndicator size={size || 'large'} />{/*se passar o tamanho, usa ele. Senao passar usa o padrao large*/}
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };