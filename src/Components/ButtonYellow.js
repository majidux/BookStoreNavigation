import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ButtonYellow extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Yellow</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    signUpButtonView:{
        backgroundColor:'#ffc107'
    },
    commonButtonsStyle:{
        width:130,
        height:50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius:5
    },
    textStyle:{
        color:'#fff',
        fontWeight:'800'
    },
});
