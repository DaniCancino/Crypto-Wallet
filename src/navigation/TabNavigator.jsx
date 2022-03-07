import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { Entypo } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle:{
                backgroundColor: '#252525',
                height: 60
            }
        }}
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused, color}) => (<Entypo name="home" size={focused ? 30 : 25} color={color} />)
        }}/>
    </Tab.Navigator>
    )
}

export default TabNavigator;