import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'app/design/view';
import CategoryCard from './CategoryCard';

// const categories = [
//     { id: 457, name: "JavaScript" },
//     { id: 647, name: "React" },
//     { id: 86504237, name: "Laravel" }
// ];

const Categories = () => {
    const [categories, setCategories] = useState([
        { id: 457, name: "JavaScript", color: 'yellow' },
        { id: 647, name: "React", color: 'green' },
        { id: 86504237, name: "Laravel", color: 'red' },
        { id: 86504237, name: "News", color: 'blue' }
    ]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map((category, index) => (
                <CategoryCard key={index} {...category} />
            ))}
        </ScrollView>
    );
};

export default Categories;
