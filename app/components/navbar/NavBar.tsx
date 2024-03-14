import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function NavBar() {
    return (
        <View style={styles.containerStyle}>
            <Image
                source={{
                    uri: 'https://i.imgur.com/y6ghc78.png',
                  }}
                style={styles.imagemStyle}
            />
            <Text style={styles.textStyle}>Todo List Mobile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7845AC',
    },
    textStyle: {
        fontSize: 28,
        lineHeight: 32,
        color: '#ffffff',
        fontWeight: '700',
        paddingLeft: 8,
    },
    imagemStyle: { 
        width: 95,
        height: 130, 
        marginBottom: 16,
        marginTop: 16,
    }
});