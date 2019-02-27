import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
// const RootStack =
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e45'
    }
});
