import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Animated, Easing,TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {userFetcher} from "../Services/fetchUsers/actionUser";
import Svg, {Rect, Circle} from "react-native-svg";
import SvgUri from "react-native-svg-uri";
import Login from './Login'
import {createStackNavigator, createSwitchNavigator} from "react-navigation";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: new Animated.Value(100)
        }
    }
    
    componentDidMount() {
        this.animationRotation();
    }
    
    animationRotation = () => {
        Animated.timing(
            this.state.rotation,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(() => this.animationRotation())
    };
    
    render() {
        let user = this.props.users.userData;
        const rotateTransform = this.state.rotation.interpolate({
            inputRange: [0, 5, 10],
            outputRange: ['0deg', '180deg', '0deg']
        });
        return (
            <Animated.View style={styles.className}>
                <Svg height="200" width="200" viewBox="0 0 100 100">
                    <Circle
                        cx={'50'}
                        cy={'50'}
                        r={'25'}
                        stroke={'blue'}
                        strokeWidth={'2.5'}
                        fill={'green'}
                    />
                    <Rect
                        x={'15'}
                        y={'15'}
                        width={'70'}
                        height={'70'}
                        stroke={'#63ee83'}
                        strokeWidth={'2'}
                        fill={'#ffff00'}
                        strokeLinejoin={'bevel'}
                    />
                </Svg>
                <Animated.View>
                    <SvgUri
                        width={'400'}
                        height={'400'}
                        source={require('../Assets/image/homer-simpson.svg')}
                        strokeWidth={10}
                        stroke={'#000'}
                        strokeLinejoin={'bevel'}
                    />
                </Animated.View>
                <TouchableOpacity>
                    <Animated.View style={{transform:[{translateX:this.state.rotation}]}}>
                        <Text style={styles.font} onPress={() => this.props.navigation.navigate('Login')}>Sign In</Text>
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#e45',
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 30,
        color: '#ffffff'
    }
});
const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
};
export default connect(mapStateToProps, {userFetcher})(SignUp)
