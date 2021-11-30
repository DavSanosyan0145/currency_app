import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export const ListItems = (props) => {
    return (
        <View style={styles.listView}>
            <View style={styles.listItemMBlock}>
                <Text style={styles.mTextsountry}>{props.data[0]}</Text>
            </View>
            <View style={styles.listItemMBlock}>
                <Text style={styles.mTexts}>{props.data[1]}</Text>
            </View>
            <View style={styles.listItemMBlock}>
                <Text style={styles.mTexts}>{props.data[2]}</Text>
            </View>
            <View style={styles.listItemMBlock}>
                <Text style={styles.mTexts}>{props.getDate}</Text>
            </View>
            <View style={styles.listItemMBlock}>
                <Text style={styles.mTexts}>{props.data[3]}%</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    listView: {
        borderWidth: 1,
        width: '95%',
        backgroundColor: '#E5E5E5',
        borderRadius: 15,
        flexDirection: 'row',
    },
    listItemMBlock: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mTextsountry: {
        fontWeight: 'bold',
    },
});
