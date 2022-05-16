import React from 'react';
import Screen from '../components/shared/screen';
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from '../components/shared/icon';
import ItemSeperator from '../components/shared/ItemSeperator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native'
const AccountScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.r
        StackActions.replace('Welcome'));
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/arman.jpg')} />
                <View style={styles.details}>
                    <Text style={styles.title}>آرمان امیرکمالی</Text>
                    <Text style={styles.subTitle}>arman.amirkamali@gmail.com</Text>
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