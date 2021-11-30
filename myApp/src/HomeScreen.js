import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { ListItems } from './ListItems';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = dd + '.' + mm + '.20';

export const HomeScreen = () => {
    const data = [
        ["USD", "475.97", "483.76", "-0.06"],
        ["EUR", "513.97", "528.21", "+0.25"],
        ["RUR", "6.37", "6.71", "+0.04"],
        ["GBP", "587.25", "607.25", "+1.27"],
        ["GEL", "133", "164.1", "-1.6"],
        ["CAD", "336.3", "350.2", "+1.75"],
        ["JPY", "28.38", "29.25", "+0.08"],
        ["AED", "129.5", "133.2", "-0.02"],
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBar}>
                <View style={styles.headerBarBlock}>
                    <Text style={styles.mTexts}>Country</Text>
                </View>
                <View style={styles.headerBarBlock}>
                    <Text style={styles.mTexts}>Purchase</Text>
                </View>
                <View style={styles.headerBarBlock}>
                    <Text style={styles.mTexts}>Sell</Text>
                </View>
                <View style={styles.headerBarBlock}>
                    <Text style={styles.mTexts}>Date</Text>
                </View>
                <View style={styles.headerBarBlockend}>
                    <Text style={styles.mTexts}>Variation</Text>
                </View>
            </View>
            <View style={styles.listItemView}>
                {
                    data.map((i, index) => <ListItems data={i} key={index} getDate={today} />)
                }
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        // backgroundColor: 'silver'
    },
    headerBar: {
        height: 30,
        width: "95%",
        paddingBottom: 5,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
    },
    mTexts: {
        fontSize: 10,
        color: 'gray'
    },
    headerBarBlock: {
        flex: 1,
        height: "100%",
        padding: 10,
        borderColor: 'gray',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBarBlockend: {
        flex: 1,
        height: "100%",
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemView: {
        width: '100%',
        height: '92%',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
