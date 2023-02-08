import { ScrollView } from 'react-native';
import { View } from 'app/design/view'
import FeaturedRow from 'app/components/FeaturedRow';
import ArticleFeed from 'app/components/ArticleFeed';
// import Categories from 'app/components/Categories';

export function HomeNative() {
    return (
        <>
            <ScrollView horizontal={false} className='bg-gray-100 ' style={{ width: '100%', height: '100%' }}>
                {/* <Categories /> */}
                <View className='pb-24'>
                    <FeaturedRow />
                    <ArticleFeed />
                </View>
            </ScrollView>
        </>
    )
}
