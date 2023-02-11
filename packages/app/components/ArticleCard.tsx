import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AsyncImage } from "./AsyncImage";
import { dateHumanize } from "app/lib/date";

export default function ArticleCard({
    id,
    jetpack_featured_media_url: image,
    title,
    excerpt: description,
    date: created_at,
    link
}) {
    const navigation = useNavigation();

    const handleRedirect = () => {
        navigation.navigate('Article', {
            "id": id,
            "image": image,
            "title": title.rendered,
            "description": description.rendered,
            "created_at": created_at,
            "link": link
        });
    };

    return (
        <View className={"w-full bg-white rounded-3xl p-5 my-2"}>
            <View className="bg-white rounded-xl">
                <AsyncImage
                    source={{ uri: image !== '' ? image : 'https://via.placeholder.com/200.png?text=No+Image' }}
                    className='h-40 w-full'
                    placeholderColor='#b3e5fc'
                />
            </View>
            <View className="mt-5">
                <Text className={"text-sm text-black/60"}>Published - {dateHumanize(created_at)}</Text>
                <Text className={"text-lg font-semibold"}>{title.rendered}</Text>
                <Text
                    numberOfLines={2}
                    className={"text-sm text-black/60"}
                >
                    {description.rendered}
                </Text>
                <TouchableOpacity
                    className="flex-row justify-center rounded-full bg-gray-700 p-3 w-10/12 self-center mt-5"
                    onPress={() => handleRedirect()}
                >
                    <Text className="text-white font-bold">Read more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
