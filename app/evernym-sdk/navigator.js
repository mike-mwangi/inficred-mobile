// @flow
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import SvgIcon from 'react-native-svg-icon'
import VersionNumber from 'react-native-version-number'
import { verticalScale, moderateScale } from 'react-native-size-matters'

import { FONT_FAMILY } from './font'
import { COLORS } from './colors'

/*
 * Here is you can customize Navigation menu
 * */

// options to be shown on navigation menu.
// Format:
// [
//   {
//     name: string,
//     label: string, - optional for predefined (there is default) / mandatory for custom
//     route: string, - optional for predefined (there is default) / mandatory for custom
//     icon: Icon, - optional for predefined (there is default)
//     component: Component - optional for predefined (there is default) / mandatory for custom
//   }
// ]
// Predefined: Home, Connections, Credentials, Settings
// export const MENU_NAVIGATION_OPTIONS = null

// Menu contains Home and Connections tabs
export const MENU_NAVIGATION_OPTIONS = [
    { name: 'Connections', label: 'My Connections' },
    { name: 'Credentials', label: 'My Credentials' },
    { name: 'PhysicalDocumentVerification', label: 'Document Verification' },
    { name: 'Settings', label: 'Settings' },
]


// component to be displayed in the navigation drawer at the top, above the navigation section
// export const DrawerHeaderContent = null
export const DrawerHeaderContent = () => (

    <Image style={styles.powered} source={require('../../docs/images/poweredByInficred.png')} />

)


const inficredSquareIcon = require('../../docs/images/inficred_logo_nobg.png')
const versionNumber = VersionNumber

// component to be displayed in the navigation drawer at the bottom, below the navigation section
// export const DrawerFooterContent = null
export function DrawerFooterContent() {
    return (
        <>
            <Image
                source={inficredSquareIcon}
                style={styles.inficredIconImage}
                accessible={true}
                accessibilityLabel="inficred-logo"
            />
            <View style={styles.inficredIconTextContainer}>
                <View style={styles.inficredIconLogoText}>
                    <Text style={styles.text}>built by INFICRED</Text>
                </View>
                <View style={styles.inficredIconBuildText}>
                    <Text style={styles.text}>
                        Version {versionNumber.appVersion}.
                        {versionNumber.buildVersion}
                    </Text>
                </View>
            </View>
        </>
    )
}



// additional routes need to be registered in the app navigator inside Screens Stack Navigator (see https://reactnavigation.org/docs/stack-navigator/)
// Format:
// [
//   {
//     route: string, - route name
//     component: Component, - React Component to render
//     navigationOptions: object, - see https://reactnavigation.org/docs/screen-options
//   }
// ]
// Predefined: Home, Connections, Credentials, Settings
export const EXTRA_SCREENS = null

// additional routes need to be registered in the app navigator inside Modal Windows Stack Navigator (see https://reactnavigation.org/docs/stack-navigator/)
// Format:
// [
//   {
//     route: string, - route name
//     component: Component, - React Component to render
//     navigationOptions: object, - see https://reactnavigation.org/docs/screen-options
//   }
// ]
// Predefined: Home, Connections, Credentials, Settings
export const EXTRA_MODALS = null

const styles = StyleSheet.create({
    inficredIconImage: {
        width: verticalScale(26),
        height: verticalScale(26),
        marginLeft: moderateScale(20),
        marginRight: moderateScale(10),
        marginBottom: moderateScale(20),
    },
    inficredIconTextContainer: {
        height: verticalScale(26),
        marginBottom: moderateScale(20),
    },
    inficredIconLogoText: {
        height: '50%',
        justifyContent: 'flex-start',
    },
    inficredIconBuildText: {
        height: '50%',
        justifyContent: 'flex-end',
    },
    text: {
        fontFamily: FONT_FAMILY,
        fontSize: verticalScale(10),
        color: COLORS.gray3,
        fontWeight: 'bold',
    },
    powered: {
        width: 250,
        height: 80,
        margin: 'auto'
    }
})

