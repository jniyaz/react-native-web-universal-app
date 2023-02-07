import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import Appbar from 'app/components/Appbar';

export function NotificationWeb() {
  return (
    <>
      <Appbar />
      <View className="flex-1 items-center justify-center">
        <Text className="mb-4 text-center font-bold">No notifications at this moment.</Text>
        <TextLink href="/">👈 Go Home</TextLink>
      </View>
    </>
  )
}
