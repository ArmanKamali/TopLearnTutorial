import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Card from '../components/shared/Card';
import Screen from '../components/shared/screen';

const CourseDetailsScreen = ({ navigation, route }) => {
    if (!route.params.course)
        return null;
    useEffect(() => {
        navigation.setOptions({
            headerShown: 'true',
            title: route.params.course.title,
            headerTitleStyle: {
                fontFamily: 'yekan',
                color: 'white',
                fontSize: RFPercentage(2.5),
            },
            headerStyle: {
                backgroundColor: 'tomato',
            }
        })
    }, [])

    const { _id, title, price, imageUrl, info } = route.params.course;
  
    

    return (
        <Screen style={styles.container}>
            <Card
                title={title}
                price={price}
                time="15:00:00"
                image={imageUrl}
                teacher="یونس قربانی"
                courseInfo = {info}
/>
        </Screen>
    )
}

export default CourseDetailsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundcolor : '#f8f4f4',

    }
})