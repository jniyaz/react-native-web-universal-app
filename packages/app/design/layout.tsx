import { View } from 'react-native'

export const Row = (props: any) => (
  <View {...props} className={`flex-row ${props.className || ''}`} />
)
