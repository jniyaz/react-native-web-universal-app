import {
  ScrollView,
} from 'react-native';
import { View } from 'app/design/view'
import Appbar from 'app/components/Appbar';
import Categories from 'app/components/Categories';
import FeaturedRow from 'app/components/FeaturedRow';
import ArticleFeed from 'app/components/ArticleFeed';

export function HomeScreen() {

  return (
    <>
      <Appbar />
      <ScrollView className='bg-gray-100 '>
        {/* <Categories /> */}
        <View className='pb-24'>
          <FeaturedRow />
          <ArticleFeed />
        </View>
      </ScrollView>
    </>
  )
}
