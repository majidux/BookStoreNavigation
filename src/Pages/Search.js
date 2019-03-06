import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, Dimensions, FlatList} from 'react-native';
import {connect} from "react-redux";
import {searchBook, thunkAction} from "../Services/fetchBooks/actions";
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const gradientHeight = 500;
const gradientColor = '#fb9600';
const data = Array.from({length: gradientHeight});

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
    
    componentDidMount() {
        this.props.thunkAction();
    }
    
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
                <View style={styles.searchTitleView}>
                    <Text style={styles.popularTitleText}>Search Area</Text>
                </View>
                <View style={styles.searchTitleView}>
                    <TextInput placeholder={'Search'} onChangeText={this.search} onSubmitEditing={this.search} placeholderTextColor={'#fff'}/>
                    {/*<Button title={'press'} onPress={this.search}/>*/}
                </View>
                <FlatList
                    data={this.props.result.result}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.flatListViewInside}>
                            <View style={styles.imageView}>
                                <Image
                                    source={{uri: item.volumeInfo.imageLinks.thumbnail}}
                                    style={styles.images}
                                    resizeMode={'cover'}
                                />
                            </View>
                            <View style={styles.bookTitleView}>
                                <Text style={styles.moreTitleText}>{item.volumeInfo.title.slice(0,25)}</Text>
                            </View>
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
        backgroundColor: '#206bec'
    },
    list:{
        flex:1,
        backgroundColor: 'pink'
    },
    flatListViewInside: {
        marginHorizontal: 10
    },
    images: {
        width: deviceWidth/2 -20,
        height: 200,
        borderRadius: 2
    },
    moreTitleText: {
        color: '#fff',
        fontWeight: '700',
    },
    bookTitleView: {
        marginVertical: 10
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: -2,
    },
    popularTitleText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },
    searchTitleView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    }
});

const mapStateToProps = (state)=>{
    return{
        result:state.bookReducer
    }
};
export default connect(mapStateToProps,{searchBook,thunkAction})(Search)
