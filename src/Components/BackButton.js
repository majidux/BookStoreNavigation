import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableHighlight,TouchableOpacity} from 'react-native';

export default class BackButton extends Component {
    render() {
        return (
            <View style={styles.className}>
                <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('Login')}
                    onPress={()=>{}}
                >
                    <Image
                        source={require('../Assets/image/left-arrow.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 20,
        height: 20,
    }
});
