import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import WatchList from '../screens/WatchList/WatchList';


const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle:{
                backgroundColor: '#252525',
                height: 50
            }
        }}
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused, color}) => (<Entypo name="home" size={focused ? 30 : 25} color={color} />)
        }}/>
        <Tab.Screen name="WatchList" component={WatchList} options={{
            tabBarIcon: ({focused, color}) => (<FontAwesome name="star" size={focused ? 30 : 25} color={color} />)
        }}/>
    </Tab.Navigator>
    )
}

export default TabNavigator;