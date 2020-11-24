import React from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from 'react-native'

// Components
import Colors from '../components/Colors'

export const FormGroup = ({children}) => {
    return <View style={{marginVertical: 32}}>
        {children}
    </View>
}

export const InputText = ({ style, label, placeholder, keyboardType = 'default', secureTextEntry}) => {

    const styles = StyleSheet.create({
        input: {
            borderColor: Colors.grey[500],
            borderWidth: 2,
            borderRadius: 16,
            color: Colors.grey[800],
            fontSize: 20,
            padding: 16
        },
        label: {
            fontSize: 20,
            marginBottom: 16,
            color: Colors.grey[900]
        }
    })
    return <View>
        {
            label &&
            <Text style={styles.label}>{label}</Text>
        }
        <TextInput style={[styles.input, style]} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry} />
    </View>
}

export const SubmitButton = ({ style, title, color, textColor, onPress = () => {} }) => {

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

    return <TouchableWithoutFeedback onPress={() => onPress()}>
        <View style={[styles.container, style]}>
            <View style={styles.body}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
}