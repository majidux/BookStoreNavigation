import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from "react-redux";
import {userFetcher} from "../Services/fetchUsers/actionUser";
// import Svg,{Rect,Circle} from "react-native-svg";

class SignUp extends Component {
    componentDidMount() {
        this.props.userFetcher()
    }
    
    render() {
        let user = this.props.users.userData;
        return (
            <View style={styles.className}>
                {
                    console.log(user)
                }
                <Svg height="50%" width="50%" viewBox="0 0 100 100">
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
                        stroke={'#e45'}
                        strokeWidth={'2'}
                        fill={'yellow'}
                    />
                </Svg>
                {/*<SvgUri*/}
                {/*width={'200'}*/}
                {/*height={'200'}*/}
                {/*source={{*/}
                {/*uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'*/}
                {/*}}*/}
                {/*/>*/}
                <Text>SignUp</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#e45',
        justifyContent:'center',
        alignItems:'center'
    }
});
const mapStateToProps=(state)=>{
    return{
        users:state.userReducer
    }
};
export default connect(mapStateToProps,{userFetcher})(SignUp)
