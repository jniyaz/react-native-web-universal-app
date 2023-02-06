import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ArticleDetailsScreen } from 'app/features/details/details-screen'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'article-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home' }}
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
