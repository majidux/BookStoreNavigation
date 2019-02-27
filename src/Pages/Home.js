import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,Dimensions} from 'react-native';
import ButtonYellow from "../Components/ButtonYellow";
import ButtonOrange from "../Components/ButtonOrange";

let deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.blueView}></View>
                <View style={styles.yellowView}></View>
                <View style={styles.imageView}>
                    <Image
                        source={require('../Assets/image/logo.png')}
                        style={styles.image}
                    />
                    <Text style={styles.logoText}>FOX</Text>
                </View>
                <View style={styles.signButton}>
                    <ButtonYellow/>
                    <ButtonOrange/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fb9600'
    },
    signButton:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageView:{
        flex:2,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    image:{
        width: 100,
        height: 100
    },
    logoText:{
        fontSize:30,
        color: '#fff',
        fontWeight: '800'
    },
    blueView:{
        width: deviceWidth*4,
        height: 150,
        backgroundColor: '#206bec',
        position:'absolute',
        transform:[
            {rotateY:'260deg'},
            {translateY:-200}
        ]
    },
    yellowView:{
        width: deviceWidth*4,
        height: 300,
        alignSelf:'flex-end',
        backgroundColor: '#2eb4fb',
        position:'absolute',
        transform:[
            {rotateX:'230deg'},
            // {translateY:-50}
        ]
    }
});
