import { Platform } from 'react-native'

export const isWeb = () => Platform.OS === 'web'
export const isAndroid = () => Platform.OS === 'android'
export const isIos = () => Platform.OS === 'ios'
export const isWindows = () => Platform.OS === 'windows'
export const isNative = () => Platform.OS === 'android' || Platform.OS === 'ios'
