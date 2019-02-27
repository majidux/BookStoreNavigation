import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.blueView}></View>
                <Text>klmf;sdnf;sdnfs;adjlfn</Text>
                <View>
                    <Text>Home</Text>
                </View>
            </View>
        );
    }
}
// const RootStack =
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e45'
    },
    blueView: {
        width: deviceWidth * 4,
        height: 150,
        backgroundColor: '#206bec',
        transform: [
            {rotateY: '260deg'}
        ],
    },
});
