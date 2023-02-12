import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { AsyncImage } from './AsyncImage';
import { dateHumanize } from 'app/lib/date';

const ArticleCard = ({
    id,
    title,
    image,
    created_at,
    description,
    link,
    relatedArticles
}: any) => {
    const navigation = useNavigation();

    const handleRedirect = () => {
        navigation.navigate('Article', {
            "id": id,
            "image": image,
            "title": title,
            "description": description,
            "created_at": created_at,
            "link": link,
            "relatedArticles": relatedArticles
        });
    };

    return (
        <TouchableOpacity
            onPress={handleRedirect}
            className='bg-white mr-3 shadow-sm'
        >
            {/* <Image source={{ uri: image }} className='h-36 w-64 rounded-sm' /> */}
            <AsyncImage
                source={{ uri: image !== '' ? image : 'https://niyaz.vercel.app/default.png' }}
                className='h-36 w-64 rounded-sm'
                placeholderColor='#b3e5fc'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title?.substring(0, 30) + '...' || ''}</Text>
                {/* <View className='flex-row items-center space-x-1'>
                    <EyeIcon color='gray' opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-xs text-gray-500'>{views}</Text>
                    </Text>
                </View> */}

                <View className='flex-row items-center space-x-1'>
                    <CalendarDaysIcon color='gray' opacity={0.4} size={22} />
                    <Text className='text-xs text-gray-500'>{dateHumanize(created_at)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ArticleCard;
