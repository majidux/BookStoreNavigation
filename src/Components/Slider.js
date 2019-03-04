import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Dimensions, Animated, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from "react-redux";
import {thunkAction} from "../Services/fetchBooks/actions";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const {width} = Dimensions.get('window');

class Slider extends Component {
    
    
    
    constructor(props){
        super(props);
        this.state={
            scrollX : new Animated.Value(0)
        }
    }
    
    
    
    componentDidMount() {
        this.props.thunkAction();
    }
    
    render() {
        let dataProduct = this.props.product.bookData.slice(0,3);
        let position = Animated.divide(this.state.scrollX,width);
        return (
            <View style={styles.className}>
                <View style={styles.discoverTitleView}>
                    <View>
                        <Text style={styles.discoverTitleText}>Discover</Text>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                </View>
                <View style={styles.flatList}>
                    <FlatList
                        data={dataProduct}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:this.state.scrollX}}}])}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                
                                <View style={styles.imagesView}>
                                    <Image
                                        resizeMode={'stretch'}
                                        source={{uri: item.volumeInfo.imageLinks.thumbnail}}
                                        style={styles.images}
                                    />
                                </View>
            
                            </View>
                        }
                    />
                </View>
                <View style={styles.dotView}>
                    {
                        dataProduct.map((_,i)=>{
                            let opacity = position.interpolate({
                                inputRange:[i-1,i, i+1],
                                outputRange:[0.3,1,.3],
                                extrapolate:'clamp'
                            });
                            return(
                                <Animated.View key={i} style={[styles.dot,{opacity}]}></Animated.View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    imagesView: {
        width: deviceWidth,
        height: deviceHeight / 4,
        paddingHorizontal: 20,
    },
    images: {
        flex: 1,
        borderRadius: 2
    },
    flatList:{
        flex:1
    },
    dot:{
        justifyContent:'center',
        alignItems:'center',
        height: 10,
        width: 10,
        backgroundColor: '#fe0200',
        margin: 8,
        borderRadius:5
    },
    dotView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    discoverTitleText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },
    discoverTitleView: {
        padding: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        product: state.bookReducer
    }
};
export default connect(mapStateToProps, {thunkAction})(Slider);
