import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class BookStore extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Book Store</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
