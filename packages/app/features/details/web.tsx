import { createParam } from 'solito';
import { TextLink } from 'solito/link'
import { ActivityIndicator, Image } from 'react-native'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import Appbar from 'app/components/Appbar';
import { usePost } from 'app/hooks/Blog/usePost';
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  EyeIcon
} from 'react-native-heroicons/solid';

const { useParam } = createParam<{ id: string }>();

const ArticleDetailsWeb = () => {
  const [id] = useParam('id')
  const { post, isLoading, isError } = usePost(`${id}`);

  if (isLoading) return <View className="flex-1 items-center justify-center"><ActivityIndicator /></View>
  if (isError) return <View className="flex-1 items-center justify-center"><p className='text-red-500'>Something went wrong.</p></View>

  return (
    <>
      <Appbar />
      <View className="bg-white">
        <View className='relative'>
          <img
            src={post.cover}
            className='h-56 w-full bg-gray-300 p-4'
          />
          <ArrowLeftIcon size={20} color='#ffffff' />
        </View>
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{post.title}</Text>
          <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <EyeIcon color='gray' opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className='text-xs text-gray-500'>{post.views}</Text>
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <CalendarDaysIcon color='gray' opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>At • {post.createdAt}</Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2 pb-4'>
            {/* {short_description} */}
            {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, qui sint! Reprehenderit minus placeat reiciendis voluptatibus? Eum error, assumenda, autem, eligendi velit praesentium voluptatibus harum facilis obcaecati pariatur blanditiis nobis.'}
          </Text>
          <TextLink className='my-6 mx-2' href="/">👈 Go Home</TextLink>
        </View>
      </View>
    </>
  )
}

export default ArticleDetailsWeb