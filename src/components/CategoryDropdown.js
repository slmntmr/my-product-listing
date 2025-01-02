import { useState } from 'react';

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="mb-4">
      <select
        className="form-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
