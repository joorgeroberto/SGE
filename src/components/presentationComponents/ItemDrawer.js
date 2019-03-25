import React, { Component } from "react";
import { View, Text, TextInput, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { List, ListItem, Content, Accordion, Left, Right, Body } from "native-base";
import {Actions, ActionConst} from 'react-native-router-flux';

const ItemDrawer = ({ name, navigation, fontWei}) => {
    return (
      <ListItem
        onPress={navigation}
        //noIndent style={{ backgroundColor: "#cde1f9", flex: 1 }}
        style={{ flex: 1}}
      >
        <View style={{flexDirection: 'row', flex: 1, paddingLeft: 0 }}>
          <Text style={{flex: 1, color:'black', fontSize: 16, fontWeight: fontWei}}>{name}</Text>
        </View>
      </ListItem>
    );
};

const styles={
    inputStyle: {
        color: '#000',
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

export default ItemDrawer;
