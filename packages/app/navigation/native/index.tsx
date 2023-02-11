import { TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bars3Icon, BellIcon, HomeIcon, ListBulletIcon } from 'react-native-heroicons/outline';
import { View } from 'app/design/view'

import { HomeScreen } from 'app/pages/HomeScreen'
import { NotificationScreen } from 'app/pages/NotificationScreen';
import { ArticleScreen } from 'app/pages/ArticleScreen';

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
    <View style={{ flexDirection: 'row', marginRight: 15 }}>
      <View style={{ justifyContent: 'center' }}>
        <Bars3Icon size={30} color="#00CCBB" />
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: 'https://niyaz.vercel.app/logo.png' }}
          style={{ widith: 30, height: 30, resizeMode: 'contain' }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <View style={{ justifyContent: 'center', marginRight: 10 }}>
          <BellIcon size={30} color="#00CCBB" />
        </View>
      </TouchableOpacity>
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
        name="Notifications"
        component={NotificationScreen}
      />
    </Stack.Navigator>
  )
}
