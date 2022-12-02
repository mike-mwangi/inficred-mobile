// @flow
import React from 'react';
import {Text} from 'react-native'
import {HomeViewEmptyState} from "./home";

// text which will be used for the header.
export const HEADLINE = null

// component to be displayed in cases of no connections.
export const MyConnectionsViewEmptyState = HomeViewEmptyState

// flag indicating whether you want to show camera button.
export const SHOW_CAMERA_BUTTON = true

// custom component to use for My Connections screen rendering (instead of predefined one)
export const CustomMyConnectionsScreen = null

// custom component to use for My Connection screen rendering (instead of predefined one)
export const CustomConnectionDetailsScreen = null

// export const MyConnectionsViewEmptyState = () => {
//     return (
//         <Text>You do not have connections yet!</Text>
//     )
// }
