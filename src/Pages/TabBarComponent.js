import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const gradientHeight = 500;
const gradientColor = '#fb9600';
const data = Array.from({length: gradientHeight});

export default class TabBarComponent extends Component {
    render() {
        return (
            <View style={styles.className}>
                {data.map((_, i) => (
                    <View key={i} style={[styles.backGround,
                        {
                            opacity: (1 / gradientHeight) * (i + 1),
                            bottom: (gradientHeight - i),
                        }]}
                    />
                ))}
                <Text>sdsadsad</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: 2,
    },
});
