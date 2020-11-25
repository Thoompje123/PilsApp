import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'

export const HomeStack = () => {
    const Stack = createStackNavigator()
    return <Stack.Navigator initialRouteName={'home-screen'} screenOptions={{headerShown: false}}>
        <Stack.Screen name={'home-screen'} component={HomeScreen}/>
    </Stack.Navigator>
}

export default HomeStack