import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';


export const NewsListItems = (props) => {
  const [show, changeShow] = useState(false)

  const toggleText = () => {
    changeShow((prev) => {
      return !prev
    })
  }

  return (
    <GestureRecognizer style={styles.ListItem} onSwipeDown={toggleText} onSwipeUp={toggleText}>
      <View style={styles.leftItem}>
        <Image
          style={styles.listItemImg}
          source={{ uri: props.imgUrl }}
        />
      </View>
      <View style={styles.rightItem}>
        <Text style={styles.Title}>{props.title}</Text>
        {
          show ? <Text style={styles.description}>{props.description}</Text> : null
        }
        <Text style={styles.addDate}>Added : {props.addDate}</Text>
      </View>
    </GestureRecognizer>
  );
}
const styles = StyleSheet.create({
  ListItem: {
    width: '95%',
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    padding: 5,
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftItem: {
    flex: 3,
    height: '100%',
    padding: 5,
  },
  rightItem: {
    flex: 7,
    height: '100%',
    padding: 10,
  },
  Title: {
    color: '#151515',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  listItemImg: {
    width: 100,
    height: 100,
  },
  description: {
    color: 'black',
    fontSize: 14,
    margin: 10,
  },

  addDate: {
    color: 'black',
    textAlign: 'right',
    fontSize: 12,
  },
});
