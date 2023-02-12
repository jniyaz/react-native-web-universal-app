import { TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bars3Icon, BellIcon, HomeIcon, ListBulletIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/outline';
import { View } from 'app/design/view'

import { HomeScreen } from 'app/pages/HomeScreen'
import { NotificationScreen } from 'app/pages/NotificationScreen';
import { ArticleScreen } from 'app/pages/ArticleScreen';
import { CategoryArticleScreen } from 'app/pages/CategoryArticleScreen';
import { LoginScreen } from 'app/pages/LoginScreen';

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'article-detail': {
    id: string
  }
}>();

// header left
// function HeaderLeft({ navigation }) {
//   return (
//     <View style={{ marginHorizontal: 10 }}>
//       {/* <Image
//         source={{ uri: 'https://niyaz.vercel.app/logo.png' }}
//         style={{ widith: 36, height: 36, resizeMode: 'contain' }}
//       /> */}
//       <HomeIcon size={30} color="#00CCBB" />
//     </View>
//   );
// }

function HeaderTitle({ navigation }) {
  return (
    <View className='flex flex-row mr-7'>
      <View className='flex-none'>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <UserIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className='flex-1'>
        <Image
          source={{ uri: 'https://niyaz.vercel.app/logo.png' }}
          style={{ widith: 30, height: 30, resizeMode: 'center' }}
        />
      </View>
      <View className='flex-none'>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <BellIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// header right
// function HeaderRight({ navigation }) {
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
//       <View style={{ marginHorizontal: 10 }}>
//         <BellIcon size={30} color="#00CCBB" />
//       </View>
//     </TouchableOpacity>
//   );
// }

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            title: '',
            // headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => <HeaderTitle navigation={navigation} />,
            // headerRight: () => <HeaderRight navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          title: 'Article',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CategoryArticles"
        component={CategoryArticleScreen}
        options={{
          title: 'Articles',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
    </Stack.Navigator>
  )
}
