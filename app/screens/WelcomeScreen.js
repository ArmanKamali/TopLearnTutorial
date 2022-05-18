import React, { useEffect } from "react";
import NetInfo from '@react-native-community/netinfo'
import {useDispatch} from 'react-redux'
import CustomButton from "./../components/shared/CustomButton";
import TopLearnText from './../components/shared/topLearnText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigationState } from '@react-navigation/native'
import {
    Alert,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    BackHandler
} from "react-native";
import { decodeToken } from "../Utils/jwt";
import { useToast } from "react-native-toast-notifications";
import { userAction } from "../actions";


const confirmationAlert = () => {
    return (
        Alert.alert('ارتباط با سرور', 'برای استفاده از اپلیکیشن باید به اینترنت متصل باشید',
            [
                {
                    text: 'باشه',
                    onPress: BackHandler.exitApp,
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        )
    )
}

const WelcomeScreen = ({ navigation }) => {
    const toast = useToast();
    const screenIndex = useNavigationState(state => state.index)
    const dispatch = useDispatch();
    useEffect(()=>{
        let currentCount = 0;

        if(screenIndex <= 0){
            BackHandler.addEventListener("hardwareBackPress", () =>{
                if(currentCount === 1){
                    BackHandler.exitApp();
                    return true;
                }

                currentCount += 1
                
                setTimeout(()=>{
                    currentCount = 0;
     
                },1000)

                return true;
            })
        }
    },[])
    useEffect(() => {
        const checkForNet = async () => {
            try {
                const state = await NetInfo.fetch()
                if (!state.isConnected) confirmationAlert();
                else {
                    const token = await AsyncStorage.getItem('token');
                    const userId = JSON.parse(await AsyncStorage.getItem('userId'));

                    if (token !== null && userId !== null) {
                        const decodedToken = decodeToken(token);
            
                        dispatch(userAction(decodedToken.user));
                        if (decodedToken.user.userId === userId)
                            // navigation.navigate('Home');
                            navigation.dispatch(
                                StackActions.replace('Home')
                            )
                        else {
                            await AsyncStorage.removeItem('token');
                            await AsyncStorage.removeItem('userId')
                            navigation.navigate('Login');
                        }
                    }
                } 
            } catch (err) {
                console.log(err)
            }
        }
        checkForNet();
    }, [])
    return (
        <ImageBackground
            source={require("../assets/bg1.jpg")}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
                <TopLearnText styles={styles.firstText} color="tomato" fontFamily="ih" size="3">
                    خودآموزی ، کسب تجربه ، ورود به بازار کار
                </TopLearnText>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="ورود"
                    color="royalblue"
                    onPress={() => navigation.navigate("Login")}
                />
                <CustomButton
                    title="ثبت نام"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    firstText: {
        top: 25,
        color: "tomato",
    },
    logo: {
        width: 200,
        height: 170,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
});
