import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'app/design/view';
import CategoryCard from './CategoryCard';


const Categories = () => {
    const [categories, setCategories] = useState(['one', 'two', 'three']);

    return (
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map((category, index) => (
                <CategoryCard key={index} title={category} />
            ))}
        </ScrollView>
    );
};

export default Categories;
