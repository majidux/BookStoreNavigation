import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {thunkAction} from "../Services/fetchBooks/actions";

class PopularBooks extends Component {
    
    moreBooks = () => {
        this.props.navigation.navigate('MoreBooks')
    };
    
    render() {
        let dataBooks = this.props.product.bookData.slice(4, 9);
        return (
            <View style={styles.className}>
                <View style={styles.popularTitleView}>
                    <View>
                        <Text style={styles.popularTitleText}>Popular</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.moreBooks}>
                            <Text style={styles.moreTitleText}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={dataBooks}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <View style={styles.flatListViewInside}>
                            <View style={styles.imageView}>
                                <Image
                                    source={{uri: item.volumeInfo.imageLinks.thumbnail}}
                                    style={styles.images}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <View style={styles.bookTitleView}>
                                <Text style={styles.moreTitleText}>{item.volumeInfo.title.slice(0, 12) + `...`}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    images: {
        width: 140,
        height: 200,
        borderRadius: 2
    },
    imageView: {},
    popularTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    flatListViewInside: {
        marginHorizontal: 10
    },
    popularTitleText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },
    moreTitleText: {
        color: '#fff',
        fontWeight: '700',
    },
    bookTitleView: {
        marginVertical: 10
    }
});
const mapStateToProps = (state) => {
    return {
        product: state.bookReducer
    }
};
export default connect(mapStateToProps, {thunkAction})(PopularBooks)
