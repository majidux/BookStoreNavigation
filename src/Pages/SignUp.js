import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Dimensions} from 'react-native';
import {connect} from "react-redux";
import {userFetcher} from "../Services/fetchUsers/actionUser";
import Svg, {Rect, Circle} from "react-native-svg";
import SvgUri from "react-native-svg-uri";
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class SignUp extends Component {
    // componentDidMount() {
    //     this.props.userFetcher()
    // }
    
    render() {
        let user = this.props.users.userData;
        return (
            <View style={styles.className}>
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
                        width={'50'}
                        height={'50'}
                        stroke={'#63ee83'}
                        strokeWidth={'2'}
                        fill={'#ffff00'}
                        strokeLinejoin={'bevel'}
                        rotation={'20'}
                    />
                </Svg>
                <SvgUri
                    width={'200'}
                    height={'200'}
                    source={require('../Assets/image/homer-simpson.svg')}
                    strokeWidth={10}
                    stroke={'#000'}
                    strokeLinejoin={'bevel'}
                />
                <Text>SignUp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#e45',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
};
export default connect(mapStateToProps, {userFetcher})(SignUp)
