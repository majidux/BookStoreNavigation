import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Slider from "../Components/Slider";
import PopularBooks from "../Components/PopularBooks";
import Recommended from "../Components/Recommended";
import Search from "./Search";
import Icon from 'react-native-vector-icons/FontAwesome';
import Setting from "./Setting";

class BookStore extends Component {
    
    static navigationOptions = {
        headerTransparent: true,
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

const TabNavigator = createBottomTabNavigator(
    {
        BookStore: {
            screen: BookStore,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="home" size={30} color={color}/>
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="search" size={20} color={color}/>
                )
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="gear" size={20} color={color}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: '#254dec'
            },
            
            activeTintColor: '#fff',
            inactiveTintColor: '#bdbdbd',
        }
    }
);
export default createAppContainer(TabNavigator);


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
