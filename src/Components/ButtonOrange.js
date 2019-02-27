import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ButtonOrange extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={[styles.loginButtonView,styles.commonButtonsStyle]}><Text style={styles.textStyle}>LOGIN</Text></View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    
    commonButtonsStyle:{
        width:130,
        height:50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius:5
    },
    loginButtonView:{
        backgroundColor:'#f97d22',
        opacity:.7
    },
    textStyle:{
        color:'#fff',
        fontWeight:'800'
    },
});
