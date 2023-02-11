import { createParam } from 'solito';
import { TextLink } from 'solito/link'
import { ActivityIndicator } from 'react-native'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import WebLayout from 'app/components/WebLayout';
import { usePost } from 'app/hooks/Blog/usePost';
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  EyeIcon
} from 'react-native-heroicons/solid';
import { dateHumanize } from 'app/lib/date';

const { useParam } = createParam<{ id: string }>();

const ArticleDetailsWeb = () => {
  const [id] = useParam('id')
  const { post, isLoading, isError } = usePost(`${id}`);

  if (isLoading) return <View className="flex-1 items-center justify-center"><ActivityIndicator /></View>
  if (isError) return <View className="flex-1 items-center justify-center"><p className='text-red-500'>Something went wrong.</p></View>

  return (
    <WebLayout>
      <View className="bg-white">
        <View className='relative'>
          <img
            src={post.jetpack_featured_media_url !== '' ? post.jetpack_featured_media_url : 'https://via.placeholder.com/200.png?text=No+Image'}
            alt={post.title.rendered}
            className='object-contain hover:object-scale-down h-56 w-full bg-gray-300 p-4'
          />
          <ArrowLeftIcon size={20} color='#ffffff' />
        </View>
        <View className='px-4 my-10'>
          <Text className='text-3xl font-bold'>{post.title.rendered}</Text>
          <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <EyeIcon color='gray' opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className='text-xs text-gray-500'>{'0'}</Text>
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <CalendarDaysIcon color='gray' opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>Created - {dateHumanize(post.modified)}</Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2 pb-4'>
            <div className='my-2' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Text>
          <TextLink className='my-6 mx-2' href="/">👈 Go Home</TextLink>
        </View>
      </View>
    </WebLayout>
  )
}

export default ArticleDetailsWeb