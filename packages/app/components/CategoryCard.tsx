import { Text, TouchableOpacity, Image } from 'react-native';
import { TextLink } from 'app/design/typography';
import { Row } from 'app/design/layout'

const CategoryCard = ({ title }) => {
    return (
        <TouchableOpacity className='mr-2'>
            <TextLink href="/user/fernando">
                {/* <Image
                    source={{ uri: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg' }}
                    className='h-20 w-20 rounded'
                /> */}
                <Text className='absolute bottom-1 left-1 text-blue-700 font-bold'>
                    {title}
                </Text>
            </TextLink>
        </TouchableOpacity>
    );
};

export default CategoryCard;
