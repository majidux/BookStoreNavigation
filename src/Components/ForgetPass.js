import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class ForgetPass extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Forget Pass</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
