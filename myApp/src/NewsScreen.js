import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import { NewsListItems } from './NewsListItems';


export const NewsScreen = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(
        () => {
            fetchData()
        }
    )
    const fetchData = async () => {
        const res = await fetch('https://mycurrencyapp-b470c.firebaseio.com/news.json')
        const fetchedData = await res.json()
        const newsData = Object.keys(fetchedData).map(key => {
            return {
                id: key,
                ...fetchedData[key]
            }
        })
        setData(newsData)
        setLoad(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%', height: '100%' }}>
                <View style={styles.NewsView} >
                    {
                        load ? <ActivityIndicator size="large" color="black" /> :
                            data.map(
                                (i, index) => <NewsListItems key={index} title={i.title} imgUrl={i.imgUrl} description={i.description} addDate={i.addDate} />
                            )
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    NewsView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

