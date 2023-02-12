import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { dateHumanize } from 'app/lib/date';
import { QuestionMarkCircleIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import * as Linking from 'expo-linking';
import RelatedArticle from 'app/components/RelatedArticle';

export function ArticleDetailsNative() {
  const navigation = useNavigation();
  const { params: { id, image, title, description, created_at, link, relatedArticles } }: any = useRoute();

  const handleGoBack = () => { navigation.goBack() };

  const _handleOpenWithLinking = () => {
    Linking.openURL(link);
  };


  return (
    <>
      <ScrollView className='bg-white'>
        <View className='relative'>
          <Image
            source={{ uri: image !== '' ? image : 'https://niyaz.vercel.app/default.png' }}
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
            <Text className='text-3xl font-bold mb-2'>{title}</Text>

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
            {/* <View className="flex-1 my-6 items-left">
              <TouchableOpacity onPress={() => _handleOpenWithLinking()}>
                <Text className='font-semibold text-md'>Click to read more.. 👈</Text>
              </TouchableOpacity>
            </View> */}

            <View className="flex-1 items-left">
              <TouchableOpacity
                className='flex-row items-center space-x-2 my-6 p-4 border-y border-gray-300'
                onPress={() => _handleOpenWithLinking()}
              >
                <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                <Text className='pl-2 flex-1 text-md font-bold'>
                  Click to read full article
                </Text>
                <ChevronRightIcon color='#00CCBB' />
              </TouchableOpacity>
            </View>

            <View className='pb-32'>
              <Text className='px-1 pt-3 mb-3 font-bold text-xl'>Related</Text>
              {relatedArticles?.map((item, i) => (
                <RelatedArticle key={i} item={item} />
              ))}
            </View>

          </View>
        </View>


      </ScrollView>
    </>
  )
}
