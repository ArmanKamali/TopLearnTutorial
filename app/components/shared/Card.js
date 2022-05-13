import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {numberWithCommas} from '../../Utils/Price'
export default function Card({title, price, teacher, time , image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.courseImage}/>
      <View style={{padding :20}}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.courseDetails}>
                <Text style={styles.price}>
                 {`قیمت دوره : ${numberWithCommas(price)} تومان`}
                </Text>
                <Text style={styles.time}>زمان دوره: {time}</Text>  
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.teacher}>مدرس دوره: {teacher}</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card :{
        borderRadius : 15,
        backgroundColor : 'white',
        marginBottom : 20,
        overflow : 'hidden',
    },
    courseImage : {
        width : '100%',
        height: 300,
    },
    userContainer : {
        marginVertical : 10,
    },
    courseDetails : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    title : {
        marginBottom : 7,
        fontFamily : 'yekan',
        fontSize : 20,
        alignSelf : 'center',

    },
    time: {
        fontFamily : 'yekan',
    },

    price : {
        fontFamily : 'yekan',
    },
    teacher : {
        fontFamily : 'ih',
        fontSize : 15,
        alignSelf: 'center'
    }
})