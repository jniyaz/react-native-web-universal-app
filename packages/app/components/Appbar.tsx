import { TextLink } from 'solito/link'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { BellIcon } from 'react-native-heroicons/outline';

const Appbar = () => {
    return (
        // max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        <View className='container flex-row max-w-full mx-auto py-4 sm:py-4 lg:py-4 px-4 sm:px-6 lg:px-8 bg-slate-300'>
            <View className='flex-1'>
                <Text className='font-bold text-xl'>Native-Web App</Text>
                <Text className='font-bold text-gray-400 text-xs'>Build with NextJs!</Text>
            </View>

            <TextLink href="/notifications">
                <BellIcon size={35} color='#00CCBB' />
            </TextLink>
        </View>
    )
}

export default Appbar