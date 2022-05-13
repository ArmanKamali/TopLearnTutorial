import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Text } from 'react-native'

const TopLearnText = ({ size, fontFamily, children, styles, color = "#000" }) => {
    return (
        <Text style={[styles, { fontFamily, fontSize: RFPercentage(size), color }]}>{children}</Text>
    );
}

export default TopLearnText;