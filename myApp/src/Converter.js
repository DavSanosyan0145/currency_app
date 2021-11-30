import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const Converter = () => {
    const [changeData, setChangeData] = useState(0)
    const [val, setVal] = useState(0)
    const changeCurrency = (v) => {
        var value = parseInt(v)
        setVal(v)
        setChangeData(value > 0 ? value * 475.5 + " - AMD" : null)
    }
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Convert USD to AMD</Text>
                <Text style={styles.TextInputTitle}>Enter the amount in dollars</Text>
                <TextInput
                    keyboardType="numeric"
                    value={`${val}`}
                    onChangeText={v => changeCurrency(v)}
                    style={{ height: 40, width: 170, borderWidth: 1, margin: 15, padding: 10, borderRadius: 10, }}
                />
                <Entypo name="cycle" color={'black'} size={50} />
                <View style={{
                    height: 40, width: 170, borderWidth: 1, margin: 15, justifyContent: 'center',
                    alignItems: 'center', borderRadius: 10
                }}>
                    <Text style={styles.outText}>{changeData}</Text>
                </View>
                <Text style={styles.TextInputTitle}>1 USD = 475.5 AMD</Text>
            </View >
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    main: {
        width: '85%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 15,
    },
    title: {
        alignItems: "center",
        fontSize: 22,
        marginBottom: 25,
        fontWeight: 'bold',
    },
    TextInputTitle: {
        fontSize: 14,
        color: 'gray',
    },
    iTexe: {
        fontSize: 16,
        color: 'red',
    },
})
