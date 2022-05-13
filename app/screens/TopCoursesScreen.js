import React from 'react';
import Screen from '../components/shared/screen';
import { StyleSheet, FlatList , View, Image, Text} from 'react-native'
import Card from '../components/shared/Card';

const courses = [
    {
        id: 1,
        title: "دوره جامع NodeJs",
        price: "300000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/NodeJs.jpg"),
    },
    {
        id: 2,
        title: "دوره جامع ReactJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/ReactJs.jpg"),
    },
    {
        id: 3,
        title: "دوره جامع ElectronJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../assets/courses/Electron.jpg"),
    },
    {
        id: 4,
        title: "دوره جامع React Native",
        price: "200000",
        teacher: "یونس قربانی",
        time: "15:00:00",
        image: require("../assets/courses/ReactNative.jpg"),
    },
]
const TopCoursesScreen = () => {
    return (
        <Screen style={styles.container}>
            <FlatList
                data = {courses}
                keyExtractor = {(course) => course.id.toString()}
                renderItem = {({item}) => (
                    <Card
                        title = {item.title}
                        time={item.time}
                        price={item.price}
                        image={item.image}
                        teacher={item.teacher}
                    />
                )}
            />
        </Screen>
    );
}

export default TopCoursesScreen;
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor : "#f8f4f4"
    }
})