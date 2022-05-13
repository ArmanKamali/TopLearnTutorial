import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from '../components/shared/screen';
import TopLearnText from './../components/shared/topLearnText';
import ItemSeperator from '../components/shared/ItemSeperator';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

const confirmationAlert = (course, onPress) => {
    return (
        Alert.alert(course.title, `مطمئنی میخوای ${course.title} رو از لیست دوره هات پاک کنی`,
            [
                {
                    text: 'انصراف',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'آره ، پاک کن',
                    onPress: onPress,
                }
            ],
            { cancelable: false }
        )
    )
}

const deleteAction = (course, onPress) => {

    return (
        <TouchableOpacity onPress={() => confirmationAlert(course, onPress)}>
            <View style={{
                backgroundColor: 'tomato',
                width: 50,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="#fff"

                />
            </View>
        </TouchableOpacity>
    )
}
const MyCoursesScreen = () => {
    const [getMyCourses, setMyCourses] = useState([
        { id: 1, title: "دوره جامع NodeJs", master: "یونس قربانی" },
        { id: 2, title: "دوره جامع React Native", master: "یونس قربانی" },
        { id: 3, title: "دوره جامع ReactJs", master: "یونس قربانی" },
        { id: 4, title: "دوره جامع ElectronJs", master: "یونس قربانی" },
        { id: 5, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی" },
    ])

    const handlerDelete = (course) => {
        setMyCourses(getMyCourses.filter(c => c.id !== course.id));
    }

    return (
        <Screen style={{ alignItems: 'center' }}>
            <View style={styles.title}>
                <TopLearnText fontFamily='yekan' size="3" color="#fff">
                    لیست دوره های من
                </TopLearnText>
            </View>
            <ItemSeperator height={5} />
            <View style={{ width: "100%" }}>
                <FlatList
                    data={getMyCourses}
                    keyExtractor={c => c.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 7 }}>
                            <ItemSeperator height={3} />
                            <GestureHandlerRootView>

                                <Swipeable
                                    renderRightActions={() =>
                                        deleteAction(item, () => handlerDelete(item))}
                                >
                                    <View style={styles.container}>
                                        <View style={styles.details}>
                                            <TopLearnText fontFamily="yekan" size="2.5">
                                                {item.title}
                                            </TopLearnText>
                                            <TopLearnText fontFamily="yekan" size="1.5">
                                                {`مدرس دوره: ${item.master}`}
                                            </TopLearnText>
                                        </View>
                                    </View>
                                </Swipeable>
                            </GestureHandlerRootView>
                        </View>
                    )}
                />
                <ItemSeperator height={3} />

            </View>
        </Screen>
    );
}

export default MyCoursesScreen;

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 10,
        width: "90%",
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
    },
    details: {
        marginLeft: 10,
        backgroundColor: '#f8f4f4',
        width: '100%',
        padding: 10,
        borderRadius: 14,
        alignItems: 'center',
    }
})