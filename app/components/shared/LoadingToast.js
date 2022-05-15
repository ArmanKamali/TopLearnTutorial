import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function LoadingToast({ text, spinner }) {
    return (
        <View>
            {spinner ?
                <Spinner
                    visible={spinner}
                    textContent={text}
                    textStyle={{ color: 'white', fontFamily: 'ih', fontSize: RFPercentage('2') }}
                /> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({})