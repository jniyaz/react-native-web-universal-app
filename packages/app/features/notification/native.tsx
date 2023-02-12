import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

export function NotificationNative() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 items-center justify-center">
            <View className="mb-4">
                <Text className="text-center font-bold">No notifications at this moment.</Text>
                <Text className='mt-2 text-center text-sm text-gray-500'>{'work in progress'}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>👈 Go Home</Text>
            </TouchableOpacity>
        </View>
    )
}
