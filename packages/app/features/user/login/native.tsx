import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

const LoginNative = () => {
  const navigation = useNavigation();
  return (
    <View className="flex min-h-full items-center justify-center">
      <View className='mb-4'>
        <Text className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>{'Sign in to your account'}</Text>
        <Text className='mt-6 text-center text-sm text-gray-500'>{'work in progress'}</Text>
      </View>
      {/* <SafeAreaView>
        <TextInput
          // onChangeText={onChangeText}
          placeholder="Email"
          className='w-full mb-4 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          value={""}
        />
        <TextInput
          // onChangeText={onChangeNumber}
          value={""}
          className='w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          placeholder="Password"
          keyboardType="numeric"
        />
      </SafeAreaView> */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>👈 Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginNative