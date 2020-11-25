import React from 'react'
import { StyleSheet, Text } from 'react-native'

// Components
import Colors from '../components/Colors'

export const Title = ({ children, style }) => {
    const styles = StyleSheet.create({
        text: {
            color: Colors.grey[900],
            fontWeight: '600',
            fontSize: 38,
        }
    })

    return <Text style={[styles.text, style]}>{children}</Text>
}

export const Description = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            color: Colors.grey[900],
            fontWeight: '300',
            fontSize: 34,
            marginBottom: 12
        }
    })

    return <Text style={styles.text}>{children}</Text>
}

export const H1 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 32
        }
    })

    return <Text style={styles.text}>{children}</Text>
}

export const H2 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 24
        }
    })

    return <Text style={styles.text}>{children}</Text>
}

export const H3 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 18
        }
    })

    return <Text style={styles.text}>{children}</Text>
}

export const H4 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 16
        }
    })

    return <Text style={styles.text}>{children}</Text>
}
export const H5 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 14
        }
    })

    return <Text style={styles.text}>{children}</Text>
}
export const H6 = ({ children }) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 12
        }
    })

    return <Text style={styles.text}>{children}</Text>
}