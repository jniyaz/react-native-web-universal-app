import { usePosts } from 'app/hooks/Blog/usePosts'
import { FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import { View } from 'app/design/view'
import { Text } from 'react-native'
import ArticleCard from "./ArticleCard";

const ArticleFeed = () => {
    const { posts, isLoading, isError } = usePosts()

    return (
        <>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{'Articles'}</Text>
            </View>
            <Text className="px-4 text-xs text-gray-500">{'Latest Blog Articles'}</Text>
            <SafeAreaView style={{ flex: 1 }}>
                {isLoading && <ActivityIndicator />}
                {posts &&
                    <FlatList
                        data={posts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ArticleCard {...item} />}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        horizontal={false}
                    />
                }
            </SafeAreaView>
        </>
    )
}

export default ArticleFeed