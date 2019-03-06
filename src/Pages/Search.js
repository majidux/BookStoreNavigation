import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableHighlight, FlatList} from 'react-native';
import {connect} from "react-redux";
import {searchBook} from "../Services/fetchBooks/actions";

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textState: ''
        }
    }
    
    search =(text)=>{
        this.props.searchBook(text)
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <Text>Search Area</Text>
                </View>
                <View>
                    <TextInput placeholder={'Search'} onChangeText={this.search} onSubmitEditing={this.search}/>
                    {/*<Button title={'press'} onPress={this.search}/>*/}
                </View>
                <FlatList
                    data={this.props.result.result}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Text>{item.volumeInfo.title}</Text>
                            </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#42ff9c'
    }
});

const mapStateToProps = (state)=>{
    return{
        result:state.bookReducer
    }
};
export default connect(mapStateToProps,{searchBook})(Search)
