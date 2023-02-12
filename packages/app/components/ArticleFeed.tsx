import { FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import { usePostsByCategory } from 'app/hooks/Blog/usePostsByCategory'
import { View } from 'app/design/view'
import { Text } from 'react-native'
import ArticleCard from "./ArticleCard";

const ArticleFeed = ({ id, name }) => {
    const { posts, isLoading, isError } = usePostsByCategory(id)

    return (
        <>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{`${name} Articles`}</Text>
            </View>
            <Text className="px-4 text-xs text-gray-500">{'Latest Blog Articles'}</Text>
            <SafeAreaView className='mx-4'>
                {isLoading && <ActivityIndicator />}
                {posts && posts.map((item, i) => <ArticleCard key={i} {...item} relatedArticles={item['jetpack-related-posts']} />)}
                {/* flatlist bring VirtualizedLists scroll view warnings */}
                {/* {posts &&
                    <FlatList
                        data={posts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ArticleCard {...item} />}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        horizontal={false}
                    />
                } */}
            </SafeAreaView>
        </>
    )
}

export default ArticleFeed