import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<RegisterScreen />
			{/* <LoginScreen /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
