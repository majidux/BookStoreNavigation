import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Login from "./src/Pages/Login";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignUp from "./src/Pages/SignUp";

let deviceWidth = Dimensions.get('window').width;


class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.blueView}></View>
            <View style={styles.imageView}>
                <Image
                    source={require('./src/Assets/image/logo.png')}
                    style={styles.image}
                />
                <Text style={styles.logoText}>FOX</Text>
            </View>
            <View style={styles.signButton}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <View style={[styles.signUpButtonView,styles.commonButtonsStyle]}><Text style={styles.textStyle}>SIGN UP</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                    <View style={[styles.loginButtonView,styles.commonButtonsStyle]}><Text style={styles.textStyle}>LOGIN</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const RootSwitch = createSwitchNavigator(
    {
        App:App,
        Login:Login,
        SignUp:SignUp
    }
);

const AppContainer = createAppContainer(RootSwitch);

export default class Karim extends Component{
    render() {
        return(
            <AppContainer/>
            )
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
    signUpButtonView:{
        backgroundColor:'#ffc107'
    },
});
