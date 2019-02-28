import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Animated, LayoutAnimation, Easing, TextInput} from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            movingAnimate:new Animated.Value(-100)
        }
    }
    componentDidMount(): void {
        this.animationFunc()
    }
    
    animationFunc = () => {
        Animated.timing(
            this.state.movingAnimate,
            {
                toValue:50,
                duration:1000,
                easing:Easing.back(),
                useNativeDriver:true
            }
        ).start()
    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../Assets/image/designRaw.png')}
                    style={styles.backGroundImage}
                />
                <View style={styles.itemView}>
                    <Animated.View style={[styles.itemViewLogo,{transform:[{translateY:this.state.movingAnimate}]}]}>
                        <Image
                            source={require('../Assets/image/logo.png')}
                            style={styles.image}
                        />
                    </Animated.View>
                    <View style={styles.itemViewInput}>
                       <View style={styles.userName}>
                           <Image
                                source={require('../Assets/image/user.png')}
                           />
                           <TextInput placeholder={'Email'}/>
                       </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#206bec',
    },
    yellowView: {
        backgroundColor: '#fb9600',
        width: deviceWidth * 4,
        height: 150,
        transform: [
            {rotateY: '260deg'},
            {translateY:-50}
        ],
    },
    itemView:{
        // justifyContent:'space-between',
        flex:1,
    },
    image:{
        width: 100,
        height: 100
    },
    imageView:{
        alignItems:'center',
        flex:1
    },
    backGroundImage:{
        width:deviceWidth,
        height:deviceHeight,
        position:'absolute'
    },
    itemViewLogo:{
        flex:2,
        alignItems: 'center',
    },
    itemViewInput:{
        backgroundColor:'#2cff4c',
        flex:1
    },
    userName:{
        flexDirection:'row'
    }
});
