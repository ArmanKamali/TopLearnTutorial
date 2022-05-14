import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import TopLearnText from './topLearnText';

const CustomButton = ({ title, onPress, color = "tomato" }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <TopLearnText styles={styles.text} color = "white" fontFamily='ih' size="2.2">{title}</TopLearnText>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "tomato",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 5,
    },
    text: {
        color: "white",
    },
});
