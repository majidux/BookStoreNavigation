import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from "react-navigation";
import BookStore from "../Pages/BookStore";
import Login from "../Pages/Login";
import BackButton from "./BackButton";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const gradientHeight = 500;
const gradientColor = '#fb9600';
const data = Array.from({length: gradientHeight});

class ForgetPass extends Component {
    
    static navigationOptions =  {
        
            // headerTransparent: true,
            headerTintColor:'red'
    };
    
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
                
                <View style={styles.forgetArea}>
                    <View>
                        <Text style={styles.titleText}>Enter your Email</Text>
                    </View>
                    <View>
                        <TextInput placeholder={'Enter your email'}/>
                    </View>
                </View>
            
            </View>
        );
    }
}

const Router = createStackNavigator(
    {
        ForgetPass: ForgetPass,
    },
    {
        headerMode:'none',
        mode:'modal'
    },
);


export default createAppContainer(Router)


const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#206BEC'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: 2,
    },
    _header: {
        width: deviceWidth,
        height: 50,
        backgroundColor: '#fb9600',
        flexDirection: 'row'
    },
    backArrow: {
        flex: 1,
    },
    rightSide: {
        flex: 5
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    forgetArea: {
        marginVertical: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        color:'#000',
        fontSize:30
    }
});
