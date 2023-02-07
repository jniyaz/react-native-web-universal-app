import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { CalendarDaysIcon, EyeIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { AsyncImage } from './AsyncImage';

const ArticleCard = ({
    id,
    title,
    image,
    views,
    created_at,
    short_description,
}) => {
    const navigation = useNavigation();

    const handleRedirect = () => {
        navigation.navigate('Article', {
            id,
            image,
            title,
            views,
            short_description,
            created_at
        });
    };

    return (
        <TouchableOpacity
            onPress={handleRedirect}
            className='bg-white mr-3 shadow-sm'
        >
            {/* <Image source={{ uri: image }} className='h-36 w-64 rounded-sm' /> */}
            <AsyncImage
                source={{ uri: image }}
                className='h-36 w-64 rounded-sm'
                placeholderColor='#b3e5fc'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title?.substring(1, 30) + '...' || ''}</Text>
                <View className='flex-row items-center space-x-1'>
                    <EyeIcon color='gray' opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-xs text-gray-500'>{views}</Text>
                    </Text>
                </View>

                <View className='flex-row items-center space-x-1'>
                    <CalendarDaysIcon color='gray' opacity={0.4} size={22} />
                    <Text className='text-xs text-gray-500'>At • {created_at}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ArticleCard;
