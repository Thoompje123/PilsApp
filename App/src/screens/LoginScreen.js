import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

// Components
import * as Forms from '../components/Forms'
import Colors from '../components/Colors'
import { LinearGradient } from 'expo-linear-gradient'

export const LoginScreen = ({ navigation }) => {
    return <LinearGradient style={{ flex: 1 }} colors={[Colors.grey[50], Colors.grey[300]]} end={[1, 0]} start={[0, 1]}>
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Icon name={'keyboard-backspace'} style={{ alignSelf: 'flex-start' }} size={32} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.title}>Let's sign you in.</Text>

                    <Text style={styles.desciption}>Welcome back. {`\n`}You've been missed!</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Forms.InputText label={'Email'} style={{ marginBottom: 16 }} placeholder={'Enter your email'} keyboardType={'email-address'} />

                    <Forms.InputText label={'Password'} placeholder={'enter your password'} secureTextEntry={true} />
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 18, color: Colors.grey[500], marginBottom: 32, textAlign: 'center' }}>
                        Dont't have an account? <Text style={{ color: Colors.grey[900] }} onPress={() => navigation.goBack()}>Register</Text>
                    </Text>

                    <Forms.SubmitButton title={'Sign in'} color={Colors.grey[900]} textColor={'white'} onPress={() => navigation.navigate('root-tabs')} />
                </View>
            </View>
        </SafeAreaView>
    </LinearGradient>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 32
    },
    headerText: {
        marginTop: 100,
        marginBottom: 100
    },
    title: {
        color: Colors.grey[900],
        fontWeight: '600',
        fontSize: 38,
        marginBottom: 16
    },
    desciption: {
        color: Colors.grey[900],
        fontWeight: '300',
        fontSize: 34,
        marginBottom: 12
    },
    footer: {

    }
})

export default LoginScreen