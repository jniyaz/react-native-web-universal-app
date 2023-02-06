import { Image, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChevronLeftIcon, UserCircleIcon } from 'react-native-heroicons/outline';

import { ArticleDetailsScreen } from 'app/features/details/details-screen'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { View } from 'app/design/view'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'article-detail': {
    id: string
  }
}>()

//Unused function
// function HeaderLeft({ navigation }) {
//   return (
//     <View style={{ backgroundColor: 'red' }}>
//       <Icon name="angle-left" size={30} color="#1841c7" />
//     </View>
//   );
// }

function HeaderTitle({ navigation }) {
  return (
    <View className="flex flex-row">
      {/* <View className='basis-1/2'>
        <ChevronLeftIcon size={30} color="#1841c7" />
      </View> */}
      <View>
        <Image source={{ uri: 'https://niyaz.vercel.app/logo.png' }} className="w-10 h-10" />
      </View>
      {/* <View className='basis-[48]'>
        <UserCircleIcon size={30} color="#1841c7" />
      </View> */}
    </View>
  );
}

//Unused function
function HeaderRight({ navigation }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <UserCircleIcon size={30} color="#1841c7" />
    </View>
  );
}

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            // headerLeft: () => <HeaderTitle navigation={navigation} />,
            headerTitle: () => <HeaderTitle navigation={navigation} />,
            // headerRight: () => <HeaderRight navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name="article-detail"
        component={ArticleDetailsScreen}
        options={{ title: 'Article' }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{ title: 'User' }}
      />
    </Stack.Navigator>
  )
}
