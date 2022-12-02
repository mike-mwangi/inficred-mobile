// @flow
import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const width = 174
const height = 564

// text which will be used for the header.
export const HEADLINE = 'INFICRED'

// flag indicating whether you want to show the history of events.
export const SHOW_EVENTS_HISTORY = true

// flag indicating whether you want to show camera button.
export const SHOW_CAMERA_BUTTON = true

// component to be displayed in cases of no recent notifications.
export const HomeViewEmptyState = () => {
    return (
        <View style={[styles.contentContainer]}>
            <View style={styles.emptyStateContainer}>
                <Image style={styles.logo} source={require('../../docs/images/inficred_logo_nobg.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStateContainer: {
        width: moderateScale(200, 0.5),
        height: moderateScale(500, 0.5),
        marginTop: height <= 640 ? 50 : 0,
    },
    logo: {
        width: 550,
        height: 500,
        alignSelf: 'center',
        margin: 'auto'
    }
})
