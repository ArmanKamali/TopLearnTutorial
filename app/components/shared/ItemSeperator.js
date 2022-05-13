import React from 'react';
import { View, StyleSheet } from 'react-native'

const ItemSeperator = ({height=1}) => {
    return ( 
        <View style={[styles.seperator,{height}]}></View>
     );
}
 
export default ItemSeperator;

const styles = StyleSheet.create({
    seperator : {
        width: "100%",
        backgroundColor : 'grey',
    }
})