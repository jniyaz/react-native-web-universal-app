import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from "react-native";
import { View } from 'app/design/view'
import { Text } from 'react-native'
import ArticleCard from "./ArticleCard";

const ArticleFeed = () => {
    const [articles, setArticles] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://mockend.com/mockend/demo/posts')
            .then((response) => response.json())
            .then((json) => {
                setArticles(json)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{'Articles'}</Text>
            </View>
            <Text className="px-4 text-xs text-gray-500">{'Latest Blog Articles'}</Text>
            {loading && <ActivityIndicator />}
            {articles && <FlatList
                data={articles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ArticleCard {...item} />}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />}
        </>
    )
}

export default ArticleFeed