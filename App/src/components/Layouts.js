import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

export const Container = ({ children, style }) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 32
        }
    })

    return <View style={[styles.container, style]}>
        <SafeAreaView style={{ flex: 1 }}>
            {children}
        </SafeAreaView>
    </View>
}