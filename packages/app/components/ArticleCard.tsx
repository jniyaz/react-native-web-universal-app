import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { useNavigation } from '@react-navigation/native';
import { AsyncImage } from "./AsyncImage";

export default function ArticleCard({
    id,
    cover: image,
    category,
    title,
    body: description,
    views,
    createdAt: created_at,
}) {
    const navigation = useNavigation();
    // const [count, setCount] = React.useState(1);
    // const { colorScheme } = useColorScheme();
    // const product = products[0];

    const handleRedirect = () => {
        navigation.navigate('Article', {
            id,
            image,
            title,
            views,
            description,
            created_at
        });
    };

    return (
        <View className={"w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5"}>
            <View className="bg-white rounded-xl">
                {/* <Image source={{ uri: image }} className='h-40 w-full' /> */}
                <AsyncImage
                    source={{ uri: image }}
                    className='h-40 w-full'
                    placeholderColor='#b3e5fc'
                />
            </View>
            <View className="mt-5">
                <Text className={"text-sm text-black/60 dark:text-white/70"}>{category}</Text>
                <Text className={"text-lg font-semibold dark:text-white"}>{title}</Text>
                {/* <View className={"flex-row justify-between items-center my-3"}>
                    <View className={"flex-row items-center gap-3"}>
                        <AntDesign
                            name="minuscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => setCount(count - 1)}
                        />
                        <Text className={"text-xl dark:text-white"}>{count}</Text>
                        <AntDesign
                            name="pluscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => setCount(count + 1)}
                        />
                    </View>
                    <Text className={"text-2xl font-extrabold dark:text-white"}>
                        ${price * count}
                    </Text>
                </View> */}
                <Text
                    numberOfLines={2}
                    className={"text-sm text-black/60 dark:text-white/70"}
                >
                    {description}
                </Text>
                <TouchableOpacity
                    className="flex-row justify-center rounded-full bg-gray-700 dark:bg-white/90 p-3 w-10/12 self-center mt-5"
                    onPress={handleRedirect}
                >
                    <Text className="text-white dark:text-black font-bold">Read more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
