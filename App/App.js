import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'


// Screens
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScreen'
import RootTabs from './src/tabs/RootTabs'

export const App = () => {
	const Stack = createStackNavigator()

	return <View style={{ flex: 1 }}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'register'} screenOptions={{ headerShown: false }} >
				<Stack.Screen name={'register'} component={RegisterScreen} />
				<Stack.Screen name={'login'} component={LoginScreen}  />
				<Stack.Screen name={'root-tabs'} component={RootTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	</View>
}

export default App