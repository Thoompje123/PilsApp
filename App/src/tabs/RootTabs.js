import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Components
import Colors from '../components/Colors'

// Stacks
import HomeStack from '../stacks/HomeStack'
import { Icon } from 'react-native-elements'

export const RootTabs = () => {
    const Tab = createBottomTabNavigator()

    return <Tab.Navigator screenOptions={({ route }) => ({
        tabBarLabel: () => {},
        tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
                case 'home-stack':
                    iconName = 'home'
                    break
            }

            return <Icon name={iconName} color={color} size={38} />
        }
    })}
    tabBarOptions={{
        activeTintColor: Colors.grey[900],
        inactiveTintColor: Colors.grey[700]
    }}>
        <Tab.Screen name={'home-stack'} component={HomeStack} />
    </Tab.Navigator>
}

export default RootTabs