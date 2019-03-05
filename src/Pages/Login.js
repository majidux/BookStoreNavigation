import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    LayoutAnimation,
    Easing,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import ForgetPass from "../Components/ForgetPass";
import BookStore from "./BookStore";
import SignUp from "./SignUp";
import Search from "./Search";
import Setting from "./Setting";
import Icon from 'react-native-vector-icons/FontAwesome';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


class Login extends Component {
    static navigationOptions = {
        headerTransparent: true,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            movingAnimate: new Animated.Value(-100),
            buttonAnimateState: new Animated.Value(200),
            emailState: new Animated.Value(100),
            passwordState: new Animated.Value(-100),
            opacityState: new Animated.Value(0)
        }
    }
    
    componentDidMount(): void {
        this.animationParallel();
    }
    
    animationParallel = () => ([
        
        Animated.timing(
            this.state.buttonAnimateState,
            {
                toValue: 10,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.opacityState,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.passwordState,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.emailState,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start(),
        Animated.timing(
            this.state.movingAnimate,
            {
                toValue: 50,
                duration: 1000,
                easing: Easing.back(),
                useNativeDriver: true
            }
        ).start()
    ]);
    
    forgetPassFunc = () => {
        this.props.navigation.navigate('ForgetPass')
    };
    loginFunc = () => {
        this.props.navigation.navigate('SignUp')
    };
    render() {
        return (
            <Animated.View style={styles.container}>
                <Animated.Image
                    source={require('../Assets/image/designRaw.png')}
                    style={[styles.backGroundImage, {opacity: this.state.opacityState}]}
                />
                <View style={styles.itemView}>
                    <Animated.View style={[styles.itemViewLogo, {transform: [{translateY: this.state.movingAnimate}]}]}>
                        <Image
                            source={require('../Assets/image/logo.png')}
                            style={styles.image}
                        />
                    </Animated.View>
                    <View style={styles.itemViewInput}>
                        <Animated.View style={[styles.userName, {transform: [{translateX: this.state.emailState}]}]}>
                            <Image
                                source={require('../Assets/image/user.png')}
                                style={styles.imageUser}
                            />
                            <TextInput placeholder={'Email'} placeholderTextColor={'#fff'}/>
                        </Animated.View>
                        <Animated.View style={[styles.userName, {transform: [{translateX: this.state.passwordState}]}]}>
                            <Image
                                source={require('../Assets/image/padlock.png')}
                                style={[styles.imageUser]}
                            />
                            <TextInput placeholder={'Password'} placeholderTextColor={'#fff'}/>
                        </Animated.View>
                        <Animated.View
                            style={[styles.buttonStyleView, {transform: [{translateY: this.state.buttonAnimateState}]}]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BookStore')}>
                                <View style={[styles.loginButtonView, styles.commonButtonsStyle]}><Text style={styles.textStyle}>LOGIN</Text></View>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[styles.forgetPass, {opacity: this.state.opacityState}]}>
                            <TouchableOpacity onPress={this.forgetPassFunc}>
                                <Text style={{color: '#fff'}}>Forget your password ?</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[styles.signUp, {opacity: this.state.opacityState}]}>
                            <TouchableOpacity onPress={this.loginFunc}>
                                <Text style={{color: '#fff'}}>Register</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

// const y = createSwitchNavigator({
//     B: BookStore
// });

const TabNavigator = createBottomTabNavigator(
    {
        BookStore: {
            screen: BookStore,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="home" size={30} color={color}/>
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="search" size={20} color={color}/>
                )
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="gear" size={20} color={color}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: '#254dec'
            },
            
            activeTintColor: '#fff',
            inactiveTintColor: '#bdbdbd',
        }
    }
);

const RouteStack = createSwitchNavigator(
    {
        Login: Login,
        SignUp:SignUp,
        ForgetPass: ForgetPass,
        BookStore: TabNavigator
    }
);

export default createAppContainer(RouteStack);

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
            {translateY: -50}
        ],
    },
    itemView: {
        flex: 1,
    },
    image: {
        width: 100,
        height: 100
    },
    imageView: {
        alignItems: 'center',
        flex: 1
    },
    backGroundImage: {
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute'
    },
    itemViewLogo: {
        flex: 2,
        alignItems: 'center',
    },
    itemViewInput: {
        // backgroundColor: 'lightgreen',
        flex: 1
    },
    userName: {
        flexDirection: 'row',
        // justifyContent:'space-between',
        // backgroundColor:'#fff',
        alignItems: 'center',
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    imageUser: {
        // width:50,
        // height:50
        marginHorizontal: 30
    },
    commonButtonsStyle: {
        width: 130,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ffc107'
    },
    buttonStyleView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    forgetPass: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    signUp:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }
});
