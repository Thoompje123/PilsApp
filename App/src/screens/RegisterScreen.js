import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// Components
import * as Forms from '../components/Forms'
import Colors from '../components/Colors'
import * as Texts from '../components/Texts'

export const RegisterScreen = ({ navigation }) => {
    return <LinearGradient style={{ flex: 1 }} colors={[Colors.grey[50], Colors.grey[300]]} end={[1, 1]} start={[0, 0]}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Texts.Title style={{ marginBottom: 16 }}>Create an account</Texts.Title>

                    <Texts.Description>It's your first time here.</Texts.Description>
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
                                <Forms.SubmitButton title={'Login'} onPress={() => navigation.navigate('login')} />
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
    }
})

export default RegisterScreen