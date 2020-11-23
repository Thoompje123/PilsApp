import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native'

// Components
import * as Forms from '../components/Forms'
import Colors from '../components/Colors'

export const LoginScreen = () => {
    return <SafeAreaView style={styles.container}>
        <View style={styles.body}>

            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={styles.title}>Let's sign you in.</Text>
                <Text style={styles.desciption}>Welcome back. {`\n`}You've been missed!</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Forms.InputText style={{ marginBottom: 16 }} placeholder={'Email'} keyboardType={'email-address'} />
                <Forms.InputText placeholder={'Wachtwoord'} secureTextEntry={true} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 18, color: Colors.grey[500], marginBottom: 32, textAlign: 'center' }}>
                    Dont't have an account? <Text style={{ color: Colors.grey[900] }}>Register</Text>
                </Text>
                <Forms.SubmitButton label={'Sign in'} color={Colors.grey[900]} textColor={'white'} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey[100],
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