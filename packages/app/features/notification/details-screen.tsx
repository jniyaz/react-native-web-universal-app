import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

export function NotifyDetailScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">No notifications at this moment.</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>👈 Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}
