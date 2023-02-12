import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { usePosts } from 'app/hooks/Blog/usePosts'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import FeaturedCard from './FeaturedCard'

const ArticlesRow = () => {
  const { posts, isLoading, isError } = usePosts()

  return (
    <View>
      <View className="mt-3 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{'Latest'}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">
        {'Latest Articles'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {isLoading && <ActivityIndicator />}
        {posts?.map((post) => (
          <FeaturedCard
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            image={post.jetpack_featured_media_url}
            created_at={post.modified}
            description={post.content.rendered}
            link={post.link}
            relatedArticles={post['jetpack-related-posts']}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default ArticlesRow
