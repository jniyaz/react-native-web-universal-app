import { TextLink } from 'solito/link'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { BellIcon } from 'react-native-heroicons/outline';
import Image from 'next/image'

const Appbar = () => {
    return (
        <View className='container flex-row max-w-full mx-auto py-4 sm:py-4 lg:py-4 px-4 sm:px-6 lg:px-8 bg-slate-300'>
            <View className='flex-1'>
                <TextLink className='my-6 mx-2' href="/">
                    <img
                        src="https://niyaz.vercel.app/logo.png"
                        style={{ widith: 30, height: 30, resizeMode: 'contain' }}
                        alt="logo"
                    />
                </TextLink>
                <Text className='font-bold text-gray-400 text-xs'>Build with NextJs!</Text>
            </View>

            <TextLink href="/notifications">
                <BellIcon size={35} color='#00CCBB' />
            </TextLink>
        </View>
    )
}

export default Appbar