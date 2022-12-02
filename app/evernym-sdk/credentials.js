// @flow
import {HomeViewEmptyState} from "./home";

// text which will be used for the header.

export const HEADLINE = 'My Credentials'

// component to be displayed in cases of no credentials.
export const MyCredentialsViewEmptyState = HomeViewEmptyState

// flag indicating whether you want to show camera button.
export const SHOW_CAMERA_BUTTON = true

// custom component to use for My Credentials screen rendering (instead of predefined one)
export const CustomMyCredentialsScreen = null

// custom component to use for Credential Details screen rendering (instead of predefined one)
export const CustomCredentialDetailsScreen = null

// whether you want to use the feature of presenting a credential
export const SHOW_CREDENTIAL = false

// NOTE: acceptably if `presenting a credential` feature is enable
// whether you want to automatically accept following `presentation request` and generate proof or show it to user for manually accepting
export const AUTO_ACCEPT_CREDENTIAL_PRESENTATION_REQUEST = null

// text which will be used as the header
export const SHOW_CREDENTIAL_HEADLINE = null

// custom component to use for Show Credential dialog rendering (instead of predefined one)
export const CustomShowCredentialModal = null
