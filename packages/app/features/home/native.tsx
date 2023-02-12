import { ScrollView } from 'react-native';
import { View } from 'app/design/view'
import FeaturedRow from 'app/components/FeaturedRow';
import ArticleFeed from 'app/components/ArticleFeed';
import Categories from 'app/components/Categories';
import ArticlesRow from 'app/components/ArticlesRow';
import GeneralArticlesRow from 'app/components/GeneralArticlesRow';

export function HomeNative() {
    return (
        <>
            <ScrollView className='bg-gray-100 '>
                <Categories />
                <View className='pb-24'>
                    <FeaturedRow />
                    <ArticlesRow />
                    <GeneralArticlesRow />
                    {/* <ArticleFeed /> */}
                </View>
            </ScrollView>
        </>
    )
}
