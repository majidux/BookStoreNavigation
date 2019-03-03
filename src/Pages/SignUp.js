import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from "react-redux";
import {userFetcher} from "../Services/fetchUsers/actionUser";

class SignUp extends Component {
    componentDidMount() {
        this.props.userFetcher()
    }
    
    render() {
        return (
            <View style={styles.className}>
                <Text>SignUp</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#e45'
    }
});
const mapStateToProps=(state)=>{
    return{
        users:state.userReducer
    }
};
export default connect(mapStateToProps,{userFetcher})(SignUp)
