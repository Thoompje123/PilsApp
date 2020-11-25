import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'

// Components
import Colors from '../components/Colors'
import * as Layouts from '../components/Layouts'

// Styles
import * as Texts from '../components/Texts'

export const HomeScreen = () => {
    return <LinearGradient style={{ flex: 1 }} colors={[Colors.grey[50], Colors.grey[200]]} start={[1, 0]} end={[0, 1]}>
        <Layouts.Container style={{ flex: 1 }}>
            <View style={{ borderWidth: 1, flex: 1, justifyContent: 'center' }}>
                <Texts.Title>Welkom back,</Texts.Title>
                <Texts.Description>Thomas</Texts.Description>
            </View>
            <View style={{ borderWidth: 1, flex: 1 }}>
                <Texts.H2>Hier zijn een paar nieuwe posts</Texts.H2>
            </View>
            <View style={{ borderWidth: 1, flex: 1 }}></View>
        </Layouts.Container>
    </LinearGradient>
}

export default HomeScreen