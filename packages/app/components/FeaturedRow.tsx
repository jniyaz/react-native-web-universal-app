import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { usePosts } from 'app/hooks/Blog/usePosts'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import FeaturedCard from './FeaturedCard'

const FeaturedRow = () => {
  const { posts, isLoading, isError } = usePosts()
  const filteredPosts = posts?.filter((p, i) => i <= 6)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{'Featured Articles'}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">
        {'Latest Featured Articles'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {isLoading && <ActivityIndicator />}
        {filteredPosts?.map((post) => (
          <FeaturedCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.cover}
            views={post.views}
            created_at={post.createdAt}
            short_description={post.body}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
