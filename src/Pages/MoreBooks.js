import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class MoreBooks extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>MoreBooks</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#70b9ee'
    }
});
