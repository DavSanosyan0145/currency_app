import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const Header = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.TopText}>Currency </Text>
            <Entypo name="credit" color={'white'} size={30} />
            <Text style={styles.TopText}>Converter</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        margin: 0,
    },
    TopText: {
        color: 'white',
        fontSize: 22,
    },
})