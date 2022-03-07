import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <Stack.Navigator 
            initialRouteName='Root'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name='Root' component={TabNavigator} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default Navigation;