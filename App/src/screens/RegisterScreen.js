import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// Components
import * as Forms from '../components/Forms'
import Colors from '../components/Colors'

export const RegisterScreen = () => {
    return <LinearGradient style={{ flex: 1 }} colors={[Colors.grey[50], Colors.grey[300]]} end={[1, 1]} start={[0, 0]}>
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={styles.title}>Create an account</Text>

                    <Text style={styles.desciption}>It's your first time here.</Text>
                </View>

                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Forms.FormGroup>
                        <Forms.InputText label={'Email'} style={{ marginBottom: 16 }} placeholder={'Enter your email'} keyboardType={'email-address'} />

                        <Forms.InputText label={'Password'} placeholder={'enter your password'} secureTextEntry={true} />
                    </Forms.FormGroup>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <LinearGradient colors={[Colors.grey[200], Colors.grey[100]]} style={{ borderRadius: 16 }} start={[0, 0]} end={[1, 0]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Forms.SubmitButton style={{}} title={'Register'} color={Colors.grey[900]} textColor={'white'} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Forms.SubmitButton title={'Login'} />
                            </View>
                        </View>
                    </LinearGradient>
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

export default RegisterScreen