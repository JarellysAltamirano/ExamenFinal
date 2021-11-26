import React from 'react'
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

export type MainStackParamList = {
    LoginScreen: undefined;
    HomeScreen: { id: number }
};

const Stack = createNativeStackNavigator <MainStackParamList> ();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{title: ''}} 
            />
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{title: 'Home'}}
            />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
