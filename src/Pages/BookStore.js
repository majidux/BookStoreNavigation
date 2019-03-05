import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Slider from "../Components/Slider";
import PopularBooks from "../Components/PopularBooks";
import Recommended from "../Components/Recommended";
import Search from "./Search";
import Icon from 'react-native-vector-icons/FontAwesome';
import Setting from "./Setting";

export default class BookStore extends Component {
    
    static navigationOptions = {
        title: 'Book Store'
    };
    
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


const styles = StyleSheet.create({
    bookStore: {
        flex: 1,
        backgroundColor: '#206bec'
    },
    sliderView: {
        flex: 1
    },
    popular: {
        flex: 2
    },
    
});
