import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BellIcon, HomeIcon } from 'react-native-heroicons/outline';
import { View } from 'app/design/view'

import { HomeScreen } from 'app/pages/HomeScreen'
import { NotificationScreen } from 'app/pages/NotificationScreen';
import { ArticleDetailsScreen } from 'app/features/details/details-screen'

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
function HeaderLeft({ navigation }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <HomeIcon size={30} color="#00CCBB" />
    </View>
  );
}

// function HeaderTitle({ navigation }) {
//   return (
//     <View style={{ flexDirection: 'row', marginRight: 15 }}>
//       <View style={{ justifyContent: 'center' }}>
//         <Bars3Icon size={30} color="#1841c7" />
//       </View>
//       <View style={{ flex: 1 }}>
//         <Image
//           source={{ uri: 'https://niyaz.vercel.app/logo.png' }}
//           style={{ widith: 36, height: 36, resizeMode: 'contain' }}
//         />
//       </View>
//       <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
//         <View style={{ justifyContent: 'center', padding: 5 }}>
//           <BellIcon size={30} color="#1841c7" />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// header right
function HeaderRight({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <View style={{ marginHorizontal: 10 }}>
        <BellIcon size={30} color="#00CCBB" />
      </View>
    </TouchableOpacity>
  );
}

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            // headerShown: false,
            title: '',
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            // headerTitle: () => <HeaderTitle navigation={navigation} />,
            headerRight: () => <HeaderRight navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleDetailsScreen}
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
