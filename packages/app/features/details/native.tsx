import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
} from 'react-native-heroicons/solid';
import { dateHumanize } from 'app/lib/date';
import { UserCircleIcon } from 'react-native-heroicons/outline';
import * as Linking from 'expo-linking';

export function ArticleDetailsNative() {
  const navigation = useNavigation();
  const { params: { id, image, title, description, created_at, link } }: any = useRoute();

  const handleGoBack = () => { navigation.goBack() };

  const _handleOpenWithLinking = () => {
    Linking.openURL(link);
  };


  return (
    <>
      <ScrollView className='bg-white'>
        <View className='relative'>
          <Image
            source={{ uri: image !== '' ? image : 'https://via.placeholder.com/200.png?text=No+Image' }}
            alt={title}
            className='h-56 w-full bg-gray-300 p-4'
          />
          {/* <AsyncImage
            source={{ uri: image !== '' ? image : 'https://via.placeholder.com/200.png?text=No+Image' }}
            className='h-56 w-full bg-gray-300 p-4'
            placeholderColor='#b3e5fc'
          /> */}
          <TouchableOpacity
            className='absolute top-14 left-5 p-2 bg-gray-700 rounded-full'
            onPress={handleGoBack}
          >
            <ArrowLeftIcon size={20} color='#ffffff' />
          </TouchableOpacity>
        </View>
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-column'>
              <View className='flex-row items-center space-x-1'>
                <CalendarDaysIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>{'Published - ' + dateHumanize(created_at)}</Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <UserCircleIcon color='gray' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-xs text-gray-500'>{'Author - Niyaz'}</Text>
                </Text>
              </View>
            </View>

            {/* <WebviewText /> */}
            {/* {description && <WebviewText source={description} />} */}
            <View className="flex-1 my-6 items-left">
              <TouchableOpacity onPress={() => _handleOpenWithLinking()}>
                <Text className='font-semibold text-md'>Click to read more.. 👈</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
