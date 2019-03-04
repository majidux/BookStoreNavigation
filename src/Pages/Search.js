import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BookStore from './BookStore';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Search</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#42ff9c'
    }
});
