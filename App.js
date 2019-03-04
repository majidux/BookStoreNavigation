import React, {Component} from 'react';
import {Dimensions,StyleSheet,View,Text} from 'react-native';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./src/Services/combiner";
import Splash from "./src/Pages/Splash";
import BookStore from "./src/Pages/BookStore";
import SignUp from "./src/Pages/SignUp";

let deviceWidth = Dimensions.get('window').width;

const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {/*<Splash/>*/}
                    <SignUp/>
                    {/*<BookStore/>*/}
                </View>
            </Provider>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fb9600'
    },
    signButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imageView: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    logoText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '800'
    },
    blueView: {
        width: deviceWidth * 4,
        height: 150,
        backgroundColor: '#206bec',
        position: 'absolute',
        transform: [
            {rotateY: '260deg'},
            {translateY: -200}
        ]
    },
    commonButtonsStyle: {
        width: 130,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5
    },
    loginButtonView: {
        backgroundColor: '#f97d22',
        opacity: .7
    },
    textStyle: {
        color: '#fff',
        fontWeight: '800'
    },
    signUpButtonView: {
        backgroundColor: '#ffc107'
    },
});
export default App;
