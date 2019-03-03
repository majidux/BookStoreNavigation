import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Slider from "../Components/Slider";
import PopularBooks from "../Components/PopularBooks";
import Recommended from "../Components/Recommended";

class BookStore extends Component {
    
    
    
    render() {
        return (
            <View style={styles.bookStore}>
                <ScrollView>
                    <View style={styles.sliderView}>
                        <Slider/>
                    </View>
                    <View style={styles.popular}>
                        <PopularBooks/>
                    </View>
                    <View style={styles.popular}>
                        <Recommended/>
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        BookStore:BookStore
    }
);
export default createAppContainer(TabNavigator)
const styles = StyleSheet.create({
    bookStore: {
        flex: 1,
        backgroundColor: '#206bec'
    },
    sliderView:{
        flex:1
    },
    popular:{
        flex:2
    }
});
