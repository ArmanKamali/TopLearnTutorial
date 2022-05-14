import React,{useEffect} from "react";
import NetInfo from '@react-native-community/netinfo'
import CustomButton from "./../components/shared/CustomButton";
import TopLearnText from './../components/shared/topLearnText';
import {
    Alert,
    View,
     StyleSheet,
    Image,
    ImageBackground,
    BackHandler
} from "react-native";

const confirmationAlert = () => {
    return (
        Alert.alert('ارتباط با سرور','برای استفاده از اپلیکیشن باید به اینترنت متصل باشید',
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
    useEffect(()=>{
        const checkForNet = async ()=>{
            const state = await NetInfo.fetch()
            if(!state.isConnected) confirmationAlert();
        }
        checkForNet();

    },[])
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
                <TopLearnText styles={styles.firstText} color = "tomato" fontFamily= "ih" size="3">
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
