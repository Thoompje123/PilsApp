import React from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from 'react-native'

// Components
import Colors from '../components/Colors'

export const InputText = ({ style, placeholder, keyboardType = 'default', secureTextEntry}) => {

    const styles = StyleSheet.create({
        input: {
            borderColor: Colors.grey[500],
            borderWidth: 2,
            borderRadius: 16,
            color: Colors.grey[800],
            fontSize: 20,
            padding: 18
        }
    })
    return <View>
        <TextInput style={[styles.input, style]} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry} />
    </View>
}

export const SubmitButton = ({ label, color, textColor }) => {

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'flex-end'
        },
        body: {
            backgroundColor: color,
            padding: 18,
            borderRadius: 16,
        },
        text: {
            color: textColor,
            fontSize: 20,
            textAlign: 'center'
        }
    })

    return <TouchableWithoutFeedback>
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
}