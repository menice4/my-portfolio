import React from "react"

interface FilterButtonsProps {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ selectedCategory, onSelectedCategory }) => { 
    const categories = ["All", "Web", "Mobile", "Game", "3D"];

    return (
        <div className ="flex space-x-4 mb-6">
            {categories.map((category) => (
                <button 
                    key={category}
                    onClick={() => onSelectedCategory(category)}
                    className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    {category}
                </button>
            ))}
            </div>
    );
};

export default FilterButtons;