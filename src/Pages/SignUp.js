import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from "react-redux";
import {userFetcher} from "../Services/fetchUsers/actionUser";

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
