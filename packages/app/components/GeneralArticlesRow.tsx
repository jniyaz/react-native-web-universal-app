import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import FeaturedCard from './FeaturedCard'
import { usePostsByCategory } from 'app/hooks/Blog/usePostsByCategory'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const GeneralArticlesRow = () => {
    const { posts, isLoading, isError } = usePostsByCategory(54)

    return (
        <View>
            <View className="mt-3 flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{'General'}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="px-4 text-xs text-gray-500">
                {'General Articles'}
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

export default GeneralArticlesRow