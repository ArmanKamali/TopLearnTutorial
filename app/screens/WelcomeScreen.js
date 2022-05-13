import React from "react";
import CustomButton from "./../components/shared/CustomButton";
import TopLearnText from './../components/shared/topLearnText';
import {
    View,
     StyleSheet,
    Image,
    ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
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
                <TopLearnText styles={styles.firstText} fontFamily= "ih" size="3">
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
        width: 260,
        height: 190,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
});
