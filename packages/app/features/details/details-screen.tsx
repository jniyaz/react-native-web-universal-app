import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
  EyeIcon
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/outline';

import { MotiLink } from 'solito/moti'
import { createParam } from 'solito'
// import Appbar from 'app/components/Appbar';
import { AsyncImage } from 'app/components/AsyncImage';

const { useParam } = createParam<{ id: string }>()

export function ArticleDetailsScreen() {
  const navigation = useNavigation();
  const {
    params: {
      id,
      image,
      title,
      views,
      short_description,
      created_at
    },
  } = useRoute();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {/* <Appbar /> */}
      <ScrollView className='bg-white'>
        <View className='relative'>
          <Image
            source={{ uri: image }}
            className='h-56 w-full bg-gray-300 p-4'
          />
          {/* <AsyncImage
                source={{ uri: image }}
                className='h-56 w-full bg-gray-300 p-4'
                placeholderColor='#b3e5fc'
            /> */}
          <TouchableOpacity
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
            onPress={handleGoBack}
          >
            <ArrowLeftIcon size={20} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
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

            <Text className='text-gray-500 mt-2 pb-4'>
              {/* {short_description} */}
              {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, qui sint! Reprehenderit minus placeat reiciendis voluptatibus? Eum error, assumenda, autem, eligendi velit praesentium voluptatibus harum facilis obcaecati pariatur blanditiis nobis.'}
            </Text>
          </View>

        </View>
      </ScrollView>
    </>
  )
}
