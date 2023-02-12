import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { View } from 'app/design/view'
import ArticleFeed from 'app/components/ArticleFeed';

export function CategoryArticlesNative() {
    const { params: { id, name } }: any = useRoute();
    return (
        <>
            <ScrollView className='bg-gray-100 '>
                <View className='pb-24'>
                    <ArticleFeed id={id} name={name} />
                </View>
            </ScrollView>
        </>
    )
}
