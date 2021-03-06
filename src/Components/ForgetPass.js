import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const gradientHeight = 500;
const gradientColor = '#fb9600';
const data = Array.from({length: gradientHeight});

export default class ForgetPass extends Component {
    
    static navigationOptions = {
        
        headerTransparent: true,
        headerTintColor: '#000',
        title: 'Forget Password'
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
    titleText: {
        color: '#000',
        fontSize: 30
    }
});
