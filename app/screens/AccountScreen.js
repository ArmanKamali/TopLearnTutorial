import React, { useState, useEffect } from 'react';
import Screen from '../components/shared/screen';
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from '../components/shared/icon';
import ItemSeperator from '../components/shared/ItemSeperator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'
const AccountScreen = ({ navigation }) => {
    const [getImage, setImage] = useState(null)
    useEffect(() => {
        const loadingImage = async () => {
            const imageUri = await AsyncStorage.getItem("Image")
            if (imageUri !== null) {
                setImage(imageUri);
            }
        }
        loadingImage();
    }, [])
    const users = useSelector(state => state.user)
    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId')
        navigation.dispatch(StackActions.replace('Welcome'));
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log(result)


        if (!result.cancelled) {
            await AsyncStorage.setItem("Image", result.uri);
            setImage(result.uri);
        }
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    {getImage ?
                        <Image source={{ uri: getImage }} style={styles.image} />
                        : (
                            <Image style={styles.image} source={require('../assets/favicon.png')} />
                        )}
                </TouchableOpacity>
                <View style={styles.details}>
                    <Text style={styles.title}>{users.fullname}</Text>
                    <Text style={styles.subTitle}>{users.email}</Text>
                </View>
                <TouchableOpacity onPress={() => { }} style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Icon name="account-settings" backgroundColor='tomato' />
                </TouchableOpacity>
            </View>
            <ItemSeperator />
            <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor='tomato' />
                    <View style={styles.details}>
                        <Text style={styles.title}>خروج از حساب کاربری</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 20,
        padding: 15,

    },
    screen: {
        backgroundColor: '#f8f4f4'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },

    details: {
        marginLeft: 10,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'yekan',
        fontSize: 20,
    },

    subTitle: {
        color: '#6e6969',

    }

})