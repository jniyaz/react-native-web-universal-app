import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

const RelatedArticle = ({ item }) => {

    const _handleOpenWithLinking = () => {
        Linking.openURL(item.url);
    };

    return (
        <TouchableOpacity
            className={`bg-white border p-4 border-gray-200`}
            onPress={() => _handleOpenWithLinking()}
        >
            <View className='flex-row'>
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'>{item.title}</Text>
                    <Text className='text-gray-400'>{item.excerpt?.substring(0, 50) + '...' || ''}</Text>
                </View>
                <View>
                    <Image
                        style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
                        source={{ uri: item.img.src !== '' ? item.img.src : 'https://niyaz.vercel.app/default.png' }}
                        className='h-16 w-16 bg-gray-300 p-4'
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RelatedArticle