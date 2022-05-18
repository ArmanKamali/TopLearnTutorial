import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import { useToast } from 'react-native-toast-notifications'

import { LoginUser } from "../api/users";
import { TopLearnForm, TopLearnFormField, SubmitButton } from '../components/forms'
import Screen from './../components/shared/screen';
import LoadingToast from './../components/shared/LoadingToast';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const LoginScreen = ({ navigation }) => {
    const toast = useToast();
    const [spinner, setSpinner] = useState(false)


    const handleUserLogin = async (user) => {
        try {
            setSpinner(true);
            const status = await LoginUser(user);
            if (status === 200){
                console.log(user)

                setSpinner(false)
                toast.show('ورود موفقیت آمیز بود', { type: 'success' , duration : 1000,animationType: 'zoom-in'})
                navigation.navigate('Home')
                // navigation.reset({
                //     index : 0,
                //     route : [{ name : 'Home'}]
                // })
            }else {
                setSpinner(false)
                toast.show('ایمیل کاربری یا کلمه عبور مورد قبول نمی باشد.', { type: 'custom' })
            
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Screen style={styles.container}>
            <LoadingToast spinner={spinner} text="در حال برقراری ارتباط..." />
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <TopLearnForm
                initialValues={{ email: "", password: "" }}
                // onSubmit={() => navigation.navigate('Home')}
                onSubmit={(user) => {
                    handleUserLogin(user)
                }}
                validationSchema={validationSchema}
            >
                <TopLearnFormField
                    placeholder="ایمیل کاربری"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="email"
                    placeholderTextColor="royalblue"
                />
                <TopLearnFormField
                    placeholder="کلمه عبور"
                    autoCompleteType="password"
                    autoCorrect={false}
                    icon="onepassword"
                    name="password"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <View style={{ width: "60%" }}>
                    <SubmitButton title="ورود کاربر" />
                </View>
            </TopLearnForm>
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {

        alignItems: "center",
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    },
});
