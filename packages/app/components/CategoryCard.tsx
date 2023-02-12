import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ id, name, color }) => {
    const navigation = useNavigation();

    const handleRedirect = () => {
        navigation.navigate('CategoryArticles', {
            "id": id,
            "name": name
        });
    };

    return (
        <TouchableOpacity
            className='mt-1 mr-2'
            onPress={() => handleRedirect()}
        >
            {/* <Image
                source={{ uri: 'https://niyaz.vercel.app/default.png' }}
                className='h-20 w-20 rounded'
            /> */}
            <Text className="bg-slate-300 px-5 py-4 rounded mb-2">{name}</Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
