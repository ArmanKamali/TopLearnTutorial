import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNavigator from './TabsNavigator';
import {WelcomeScreen, LoginScreen, RegisterScreen} from '../screens'



const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName = 'Home'
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={TabsNavigator} />
            </Stack.Navigator>
        </>
    );
}

export default StackNavigator
